import {pnpm, run} from "../helpers";
import {output} from "../output";

export default {
    name: 'pull',
    description: 'Pull docs and install new dependencies in developer-portal',
    options: [],
    handler: async ({}, program: any) => {
        output.notice('Pulling from git');
        await run('git', ['pull', '--ff']);

        output.notice('Installing new packages');
        await pnpm('i');

        output.success('Up to date');
    }
};