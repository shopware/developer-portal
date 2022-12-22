import {optionDst} from "../options";
import getDeveloperPortalPath from "../flow/getDeveloperPortalPath";

export default {
    name: 'remove',
    description: 'Remove <dst>',
    options: [
        optionDst
    ],
    handler: async (options: object, program: any) => {
        const dir = await getDeveloperPortalPath();

        // other directories are embedded (symlinked/copied) and can be removed
        const core = [
            'apps',
            'integrations',
            'public',
            'resources/api',
            'themes',
        ];
    }
};