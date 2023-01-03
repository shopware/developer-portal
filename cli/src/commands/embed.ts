import {output} from "../output";
import clone from "./clone";
import {repositories} from "../data";
import inquirer from "inquirer";
import confirm from '@inquirer/confirm';

export default {
    name: 'embed',
    description: 'Embed all docs repositories to developer-portal',
    options: [
        {
            name: 'c --configure',
            description: 'Apply manual configuration for embedding feature branches and forks',
            defaultValue: false,
        }
    ],
    handler: async ({configure}: { configure: boolean | null }, program: any) => {
        output.notice('Embedding repositories');

        const {selectedRepositories} = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'selectedRepositories',
                message: 'Select repositories to embed',
                choices: repositories.map(({name}) => ({name, value: name})),
                when: !!configure,
            }
        ]);

        for (const repo of repositories) {
            if (configure && !selectedRepositories.includes(repo.name)) {
                continue;
            }

            output.notice(`Processing ${repo.name}`);

            // allow custom branch (features) and organization (forks)
            let branch = repo.branch;
            let org = repo.org;
            if (configure && await confirm({message: 'Would you like to override branch or organization?'})) {
                const response = await inquirer.prompt([
                    {
                        type: 'text',
                        name: 'branch',
                        message: 'Branch',
                        default: branch,
                    },
                    {
                        type: 'text',
                        name: 'org',
                        message: 'Organization',
                        default: org,
                    }
                ]);
                branch = response.branch;
                org = response.org;
            }

            // call clone command
            output.notice(`Embedding ${repo.name}`);
            await clone.handler({
                repository: repo.name,
                src: repo.src,
                dst: repo.dst,
                branch,
                org,
            });

            output.success(`Processed ${repo.name}`);
        }

        output.success('Repositories embedded');
    }
};