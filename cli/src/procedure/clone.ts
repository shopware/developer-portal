import {output} from "../output";
import fs from "fs";
import {getDeveloperPortalPath, run, sh} from "../helpers";
import process, {env} from "process";
import { execSync } from 'child_process';

export const clone = async ({
                                repository, // 1
                                branch, // 2
                                src, // 3
                                dst, // 4
                                ...options
                            }: { repository: string, branch: string, src: string, dst: string, options: {} }) => {
    // prepare variables
    const tmpDir = '/tmp/mount-all';
    //const developerDir = await getDeveloperPortalPath();
    const developerDir = process.cwd();
    src = `${tmpDir}/${src}`
    //dst = `../developer-portal/src/${dst}`;
    dst = `${developerDir}/src/${dst}`;
    output.notice(`Cloning to ${dst} from ${src} in ${branch}@${repository}`);

    // delete existent dir
    if (fs.existsSync(dst) && fs.lstatSync(dst).isDirectory()) {
        output.notice(`Deleting dir ${dst}`);
        fs.rmSync(dst, {recursive: true, force: true});
    } else {
        output.notice(`Dir does not exist ${dst}`);
    }

    // cleanup previous checkout
    if (fs.existsSync(tmpDir) && fs.lstatSync(tmpDir).isDirectory()) {
        output.notice(`Cleaning up dir ${tmpDir}`);
        fs.rmSync(tmpDir, {recursive: true, force: true});
    }

    // clone into tmp dir
    output.notice(`Cloning branch ${branch} in repo ${repository}`);
    const gitCloneOutput = execSync(`git clone --depth 1 -b ${branch} https://${repository} ${tmpDir}`);
    output.log(`${gitCloneOutput}`);
    //await run('which', ['git'], {dir: tmpDir});
    //await run('/usr/local/bin/git', ['--version'], {dir: tmpDir});
    //await run('git', ['clone', '--depth', '1', '-b', branch, `https://${repository}`, tmpDir], {dir: tmpDir});

    // special flows
    const docsAfterClone = '.github/scripts/docs-after-clone.sh';
    if (fs.existsSync(`${tmpDir}/${docsAfterClone}`) && fs.lstatSync(`${tmpDir}/${docsAfterClone}`).isFile()) {
        output.notice('Running additional steps');
        fs.chmodSync(`${tmpDir}/${docsAfterClone}`, 0o777);
        await run(`${tmpDir}/${docsAfterClone}`, [], {
            dir: tmpDir,
            env: {
                FIGMA_API_KEY: env.FIGMA_API_KEY,
                FIGMA_FILE: env.FIGMA_FILE,
            }
        });
    }

    // create deep dir
    output.notice(`Creating deep dir ${dst}`);
    fs.mkdirSync(dst, {recursive: true});

    // tmp delete last dir
    //output.notice('Deleting last dir');
    //fs.rmdirSync(dst, {recursive: true});

    // create a new symlink
    output.notice(`Copying ${src} to ${dst}`);
    await run('cp', ['-R', src, dst], {dir: tmpDir});

    // cleanup tmp dir
    output.notice('Cleaning up');
    fs.rmSync(tmpDir, {recursive: true, force: true});
}