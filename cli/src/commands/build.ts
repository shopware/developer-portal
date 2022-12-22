import {output} from "../output";
import getDeveloperPortalPath from "../flow/getDeveloperPortalPath";
import {pnpm} from "../helpers";

export default {
    name: 'build',
    description: 'Build docs',
    options: [],
    handler: async ({}, program: any) => {

        const dir = await getDeveloperPortalPath();

        output.log('Building docs in', dir);
        await pnpm('build', [], {dir});
        output.log('Built');

    }
};