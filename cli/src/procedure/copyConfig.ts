import fs from "fs";
import {output} from "../output";
import {run} from "../helpers";

export const copyConfig = async (src: string, dst: string) => {
    const docsConfig = '.github/scripts/docs.yml';
    if (!fs.existsSync(`${src}/${docsConfig}`) || !fs.lstatSync(`${src}/${docsConfig}`).isFile()) {
        return;
    }
    
    output.notice('Copying external config');
    await run('cp', [`${src}/${docsConfig}`, `${dst}/docs.yml`], {dir: src});
}