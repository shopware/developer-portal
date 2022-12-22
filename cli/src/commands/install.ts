import inquirer from "inquirer";
import {choices} from "../helpers";
import {output} from "../output";
import confirm from '@inquirer/confirm';

const fs = require('fs');

const allAliases = {
    'docs:copy': 'Copy (cp) docs from your docs dir to the target/destination dir',
    'docs:symlink': 'Symlink (ln) docs from your docs dir to the target/destination dir',
    'docs:sync': 'Sync (rsync) docs from your docs dir to the target/destination dir',
    'docs:remove': 'Remove (rm) docs from your docs dir to the target/destination dir',
    'separator': 'separator',
    'docs:preview': 'Preview docs (npm run dev)',
    'docs:build': 'Build docs (npm run build)',
    'separator2': 'separator',
    'docs:test': 'Run e2e docs tests (dev)',
    'docs:test:build': 'Run e2e docs tests (build)',
    'separator3': 'separator',
    'docs:pull': 'Pull latest changes from remote',
    'docs:embed': 'Embed other repositories',
};

export default {
    name: 'install',
    description: 'Update aliases/scripts in package.json',
    options: [],
    handler: async ({}, program: any) => {

        const packageJson = `${process.cwd()}/package.json`;

        const {aliases} = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'aliases',
                message: `Pick aliases that you would like to install`,
                choices: choices(allAliases),
                pageSize: Object.keys(allAliases).length
            }
        ]);

        if (!aliases.length) {
            output.error('Empty set, exiting ...');
            return;
        }

        const confirmed = await confirm({
            message: `Do you really want to add selected aliases to the ${packageJson}?`
        });

        if (!confirmed) {
            output.error('Not confirmed, exiting ...');
            return;
        }

        try {
            const data = fs.readFileSync(packageJson);
            const jsonObject = JSON.parse(`${data}`);
            aliases.forEach((alias: string) => {
                if (!jsonObject.scripts) {
                    jsonObject.scripts = {};
                }
                jsonObject.scripts[alias] = `../developer-portal/docs-cli ${alias.substring('docs:'.length)}`;
            })
            fs.writeFileSync(packageJson, JSON.stringify(jsonObject, null, 2));
        } catch (err) {
            console.error(err);
            return;
        }

        output.success(`Updated ${packageJson}`);
    }
};