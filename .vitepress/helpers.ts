import fs from "fs-extra";

export const copyAdditionalAssets = (publicDirs) => {

    console.log('COPYING NOT-STANDARD ASSETS', `${process.cwd()}/.vitepress/dist/`)

    publicDirs.forEach(dir => {
        const dirToCopy = `${process.cwd()}/src/${dir}`;
        const distDir = `${process.cwd()}/.vitepress/dist/${dir}`;

        // make sure dir exists
        try {
            fs.statSync(distDir).isDirectory();
            console.log(`dir exists ${distDir}`)
        } catch (e) {
            console.log(`creating dir ${distDir}`)
            fs.mkdirSync(distDir, {recursive: true});
        }

        // copy files
        fs.readdirSync(dirToCopy).forEach(file => {
            console.log(`Copying ${dirToCopy}/${file} to ${distDir}/${file}`);
            fs.writeFileSync(`${distDir}/${file}`, fs.readFileSync(`${dirToCopy}/${file}`));
        });
    })

}