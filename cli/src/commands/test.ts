import {output} from "../output";
import getDeveloperPortalPath from "../flow/getDeveloperPortalPath";
import {pnpm} from "../helpers";

export default {
    name: 'test',
    description: 'Run vitest end-to-end suite in your local developer-portal repository. Use build flag (-b / --build) to run test on the build.',
    options: [
        {
            name: 'b --build',
            description: 'Create a build and then run e2e tests'
        }
    ],
    handler: async ({build = false}, program: any) => {

        const dir = await getDeveloperPortalPath();

        output.log('Running tests in', dir);
        await pnpm(build ? 'test:build' : 'test', [], {dir});
        output.log('Tested');

    }
};