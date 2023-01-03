import {output} from "../output";
import fs from "fs";

export default {
    name: 'config',
    description: 'Reconfigure .docs-cli',
    options: [
        {
            name: 'd --destroy',
            description: 'Destroy configuration',
        },
        {
            name: 'v --view',
            description: 'View configuration',
        }
    ],
    handler: async ({destroy, view}: { destroy: boolean, view: boolean }) => {
        const docsCLI = '../.docs-cli';

        if (destroy) {
            output.error(`Destroying ${docsCLI} folder config`);
            fs.rmSync(docsCLI, {recursive: true});
            output.error(`Destroyed ${docsCLI} folder config`);
            return;
        }

        const files = fs.readdirSync(docsCLI);
        if (view) {
            for (const file of files) {
                const content = await fs.readFileSync(`${docsCLI}/${file}`);
                output.log(`${file}: ${content}`);
            }
            return;
        }

        // @T00D00 - select key to reconfigure
        output.log('Not yet implemented');
    }
};