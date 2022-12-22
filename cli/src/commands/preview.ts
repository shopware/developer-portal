import getDeveloperPortalPath from "../flow/getDeveloperPortalPath";
import {output} from "../output";
import {pnpm} from "../helpers";

export default {
    name: 'preview',
    description: 'Preview docs',
    options: [],
    handler: async ({}, program: any) => {

        const dir = await getDeveloperPortalPath();

        output.log('Previewing docs in', dir);
        await pnpm('dev', [], {dir});
        output.log('Previewed');

    }
};