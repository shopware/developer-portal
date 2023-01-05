import {output} from "../output";

export default {
    name: 'remove',
    description: 'Remove <dst> in developer-portal',
    options: [],
    handler: async () => {
        // @T00D00 - implement!
        output.notice('Removing symlinks and copied dirs');

        // other directories are embedded (symlinked/copied) and can be removed
        const core = [
            'apps',
            'integrations',
            'public',
            'resources/api',
            'themes',
        ];

        output.notice('Project cleaned up');
    }
};