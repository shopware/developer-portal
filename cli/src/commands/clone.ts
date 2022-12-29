import {composeRepository, sh} from "../helpers";
import {optionDst, optionSrc} from "../options";
import {output} from "../output";
import {repositories} from "../data";
import inquirer from "inquirer";
import {storage} from "../storage";
import {env} from "process";

export default {
    name: 'clone',
    description: 'Clone <src> from <branch> in <repository> to <dst> in developer-portal',
    options: [
        {
            name: 'r --repository <repository>',
            example: 'frontends | shopware/frontends | shopware/frontends.git | github.com/shopware/frontends.git | ssh://git@gitlab.com/shopware/frontends.git'
        },
        {
            name: 'b --branch <branch>',
            defaultValue: 'main'
        },
        optionSrc,
        optionDst,
        {
            name: 'o --org <org>',
            defaultValue: 'shopware'
        },
        {
            name: 'u --user <user>',
            defaultValue: 'git'
        },
        {
            name: 'p --pass <pass>',
            defaultValue: null
        },
        {
            name: 'g --git <git>',
            defaultValue: 'github.com'
        },
    ],
    handler: async ({repository, branch, src, dst, org, user, pass, git}: { [key: string]: string }) => {
        output.notice(`Cloning ${repository}`);

        repository = composeRepository(repository, {git, org, user, pass});

        const myEnv: { [key: string]: string } = {};
        for (const repo of repositories) {
            if (typeof repo !== 'object' || typeof repo.env === "undefined") {
                continue;
            }

            for (const key of Object.keys(repo.env)) {
                // check for env variable
                if (env[key]) {
                    // @ts-ignore
                    myEnv[key] = env[key];
                    continue;
                }

                // check for local storage
                const saved = storage.get(key);
                if (saved) {
                    output.notice(`Exists ${key}`);
                    myEnv[key] = saved;
                    continue;
                }

                const {value} = await inquirer.prompt([
                    {
                        name: 'value',
                        type: 'password',
                        // @ts-ignore
                        message: `${repo.env[key]} - ${key}`,
                    }
                ]);

                storage.set(key, value);
            }
        }

        // @T00D00 - rewrite
        await sh(`.github/scripts/clone.sh`, [
            repository,
            branch,
            src,
            dst,
        ], {
            env: myEnv
        });

        output.success(`${repository} cloned`);
    }
};