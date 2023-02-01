import fs from "fs-extra";
import glob from "glob";
import yaml from "js-yaml";
import path from "path";
import {simpleSitemapAndIndex, SitemapItemLoose, EnumChangefreq} from "sitemap";

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

export const createSitemap = async () => {
    console.log('Discovering *.html');
    const files: string[] = await new Promise((resolve) => {
        glob("./.vitepress/dist/**/*.html", {}, (er, files) => {
            const urls = files.map(file => file.substring('./.vitepress/dist'.length))
                .map(file => file.endsWith('/index.html')
                    ? file.substring(0, file.length - 'index.html'.length)
                    : file)
                .filter(file => file !== '404.html');
            resolve(urls);
        });
    });

    const priorities = {
        2: 1.0,
        3: 0.8,
        4: 0.6,
        5: 0.4,
        6: 0.2,
    };
    const sourceData: SitemapItemLoose[] = files.map((url: string): SitemapItemLoose => ({
        url,
        changefreq: EnumChangefreq.MONTHLY,
        priority: priorities[url.split('/').length] || 0.1
    }));

    console.log('Writing sitemap.xml');
    const destinationDir = './.vitepress/dist/';
    const limit = 50_000;
    await simpleSitemapAndIndex({
        hostname: 'https://beta-developer.shopware.com',
        destinationDir,
        sourceData,
        limit,
        gzip: false
    })

    // create robots.txt
    const robots = [
        'User-agent: *',
        'Allow: *',
        'Sitemap: https://beta-developer.shopware.com/sitemap.xml'
    ].join("\n");
    fs.writeFileSync(`${destinationDir}robots.txt`, robots);

    if (limit >= sourceData.length) {
        // transform to single no-indexed sitemap
        fs.rmSync(`${destinationDir}sitemap-index.xml`);
        fs.rename(`${destinationDir}sitemap-0.xml`, `${destinationDir}sitemap.xml`);
    } else {
        // rename index
        fs.rename(`${destinationDir}sitemap-index.xml`, `${destinationDir}sitemap.xml`);
    }

}