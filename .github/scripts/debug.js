/**
 * This file is used for debugging large number of .md files and narrowing down the syntax issues they contain.
 * The script test the build process by embedding files one-by-one and separating them into "working" and "broken" dirs.
 *
 * Flow:
 *  - embed troublesome repository
 *    $ ./docs-cli clone --repository docs
 *
 *  - copy embedded files
 *    $ rsync -a ./src/docs/ ./src/docs-raw
 *
 *  - update files constant in debug.js with the updated list
 *    $ find ./src/docs/ -name "*.md"
 *
 *  - delete all .md files
 *    $ find ./src/docs/ -name "*.md" -exec rm {} \;
 *
 *  - build docker image
 *    $ docker build -t my-pnpm -f Dockerfile .
 *
 *  - add dir exclusions to the "srcExclude" section in ./.vitepress/config.ts
 *    - "docs-raw/**"
 *    - "docs-working/**"
 *    - "docs-broken/**"
 *
 *  - update "build" command in package.json and add custom validation line
 *    "vitepress build && echo 'REALLYBUILT'"
 *
 *  - run debug script from the "raw" dir
 *    $ node ./.github/scripts/debug.js raw
 *
 *  - review and fix issues in the "broken" dir
 *
 *  - update files constant in debug.js with the broken list
 *    $ find src/docs-broken -name '*.md'
 *
 *  - re-run debug script from the "broken" dir
 *    $ node ./.github/scripts/debug.js broken
 */

const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');
const {clearTimeout} = require("timers");

const sourceDir = process.argv[2];

if (['raw', 'broken'].includes(sourceDir)) {
    throw "Dir param should be 'raw' or 'broken'";
}

const files = [];

const fullProcess = async () => {
    let i = 0;
    for (const file of files) {
        console.log(`FILE ${i} ${file}`);
        i++;

        const dir = path.dirname(`./src/docs/${file}`);
        const dir2 = path.dirname(`./src/docs-broken/${file}`);
        const dir3 = path.dirname(`./src/docs-working/${file}`);

        // create tmp dirs
        try {
            fs.mkdirSync(dir, {recursive: true});
        } catch (e) {
        }
        try {
            fs.mkdirSync(dir2, {recursive: true});
        } catch (e) {
        }
        try {
            fs.mkdirSync(dir3, {recursive: true});
        } catch (e) {
        }

        // copy file
        console.log(`Copying ${file}`);
        fs.writeFileSync(`./src/docs/${file}`, fs.readFileSync(`./src/docs-${sourceDir}/${file}`));

        // start container
        console.log(`Starting container`);
        execSync(`docker run -dit --name my_container -v $PWD:/www/ my-pnpm /bin/sh`);

        // run build script
        console.log(`Building with ${file}`);
        const promise = new Promise((resolve, reject) => {
            // set timeout
            const timeout = setTimeout(() => {
                console.log(`Timeout`);
                reject('timeout');
            }, 60000);

            try {
                const buildResponse = execSync(`docker container exec -t my_container pnpm --dir /www/ build`, {
                    timeout: 55000
                });
                if (`${buildResponse}`.includes('REALLYBUILT')) {
                    // REALLYBUILT
                    console.log('resolving');
                    resolve(buildResponse);
                } else {
                    console.log('rejecting', `${buildResponse}`);
                    reject(buildResponse);
                }
            } catch (e) {
                reject(e);
            } finally {
                clearTimeout(timeout);
            }
        });

        try {
            await promise;

            // mark as working
            fs.writeFileSync(`./src/docs-working/${file}`, fs.readFileSync(`./src/docs-raw/${file}`));
        } catch (e) {
            // mark as broken
            fs.writeFileSync(`./src/docs-broken/${file}`, fs.readFileSync(`./src/docs-raw/${file}`));

            if (e?.output) {
                console.error('REJECTED', `${e.output}`, `${e.stdout}`, `${e.stderr}`)
            } else {
                console.error('REJECTED', e);
            }
        } finally {
            fs.rmSync(`./src/docs/${file}`);
            execSync(`docker rm -f my_container`);
        }
    }
}

return (async () => {
    await fullProcess();
})();