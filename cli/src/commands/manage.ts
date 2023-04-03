import {output} from "../output";
import clone from "./clone";
import {repositories} from "../data";
import inquirer from "inquirer";
import confirm from '@inquirer/confirm';
import {getDeveloperPortalPath} from "../helpers";
import fs from "fs";
import {cleanup} from "../procedure/cleanup";
import {cloneCustom} from "../procedure/clone";

export default {
    name: 'manage',
    description: 'Add or remove mountpoints in developer-portal',
    options: [],
    handler: async ({}: { configure: boolean | null, ci: boolean }, program: any) => {

        output.notice('Managing repositories');
        const developerPortalPath = await getDeveloperPortalPath();

        const {selectedRepositories} = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'selectedRepositories',
                message: 'Select repositories to manage',
                choices: repositories.map(({name, branch}) => ({name: `${name} (${branch})`, value: name})),
            }
        ]);

        for (const repo of repositories) {
            if (!selectedRepositories.includes(repo.name)) {
                continue;
            }

            output.notice(`Processing ${repo.name}`);
            const fullPath = `${developerPortalPath}/src/${repo.dst}`;
            let exists = false;
            let type = null;
            try {
                exists = fs.existsSync(fullPath);
                const stat = fs.statSync(fullPath);
                type = stat.isDirectory()
                    ? 'dir'
                    : (stat.isSymbolicLink() ? 'symlink' : null);
            } catch (e) {
            }

            let clean = true;
            if (type) {
                clean = await cleanup({type, fullPath});
            }

            if (clean && await confirm({message: `Do you want to mount ${repo.name}?`})) {
                await cloneCustom(repo, true, false);
            }
        }

        output.success('Repositories embedded');
    }
};