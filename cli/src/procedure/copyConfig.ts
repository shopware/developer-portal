import fs from "fs";
import {output} from "../output";
import {run} from "../helpers";

export const copyConfig = async (src: string, dst: string) => {
    const configs = [
        {
            src: '.github/scripts/docs.yml',
            dst: 'docs.yml',
            message: 'Copying external config',
        },
        {
            src: '.gitbook.yaml',
            dst: '.gitbook.yaml',
            message: 'Copying gitbook config',
        }
    ];

    for (const config of configs) {
        if (!fs.existsSync(`${src}/${config.src}`) || !fs.lstatSync(`${src}/${config.src}`).isFile()) {
            continue;
        }

        output.notice(config.message);
        await run('cp', [`${src}/${config.src}`, `${dst}/${config.dst}`], {dir: src});
    }
}