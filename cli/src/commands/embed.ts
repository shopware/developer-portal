import {sh} from "../helpers";
import {output} from "../output";
import clone from "./clone";
import {repositories} from "../data";
import inquirer from "inquirer";
import confirm from '@inquirer/confirm';

export default {
    name: 'embed',
    description: 'Clone <src> from <branch> in <repository> to <dst>',
    options: [],
    handler: async ({}, program: any) => {

        const {repositories: selectedRepositories} = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'repositories',
                message: 'Select repositories to embed',
                choices: repositories.map(({name}) => ({name, value: name})),
            }
        ]);

        for (const repo of repositories) {
            if (!selectedRepositories.includes(repo.name)) {
                continue;
            }

            output.notice(`Processing ${repo.name}`);

            let branch = repo.branch;
            let org = 'shopware';
            if (await confirm({message: 'Would you like to override branch or organization?'})) {
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

            await clone.handler({
                repository: repo.name,
                src: repo.src,
                dst: repo.dst,
                branch,
                org,
            }, program);

            output.success(`Processed ${repo.name}`);
        }

        // can't call .sh because we need to collect data
        // await sh(`.github/scripts/embed.sh`, [], {env: {}});

        output.success('Embedded');
    }
};