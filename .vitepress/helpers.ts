import fs from "fs-extra";
import glob from "glob";
import yaml from "js-yaml";
import path from "path";

export const copyAdditionalAssets = async (customDirs = []) => {
    const sourceRoot = 'src/';
    const publicDirs: string[] = await new Promise((resolve, reject) => {
        console.log('Discovering docs.yml');
        glob("**/docs.yml", {}, (er, files) => {
            const directories = files.reduce((reduced, file) => {
                const content = yaml.load(fs.readFileSync(file))
                const filesToCopy = content?.['build-end']?.['copy-additional-assets'] ?? [];
                const dirName = path.dirname(file);

                return [
                    ...reduced,
                    ...filesToCopy.map(fileToCopy => `${dirName.substring(sourceRoot.length)}/${fileToCopy}`)
                ];
            }, customDirs);
            resolve(directories)
        });
    });

    console.log(`Copying non-standard static assets from ${process.cwd()}/${sourceRoot} to ${process.cwd()}/.vitepress/dist/`);
    publicDirs.forEach(dir => {
        const dirToCopy = `${process.cwd()}/${sourceRoot}${dir}`;
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