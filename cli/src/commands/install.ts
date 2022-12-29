import inquirer from "inquirer";
import {choices} from "../helpers";
import {output} from "../output";
import confirm from '@inquirer/confirm';
import fs from "fs";

const allAliases = {
    'docs:link': 'Link docs from your docs dir to the target/destination dir (symlink, rsync or copy strategies)',
    'docs:remove': 'Remove docs from your docs dir to the target/destination dir',
    'docs:preview': 'Preview docs (npm run dev)',
    'docs:build': 'Build docs (npm run build)',
    'docs:test': 'Run e2e docs tests (dev)',
    'docs:test:build': 'Run e2e docs tests (build)',
    'docs:pull': 'Pull latest changes from remote',
    'docs:embed': 'Embed other repositories',
};

export default {
    name: 'install',
    description: 'Update aliases/scripts in package.json',
    options: [],
    handler: async () => {
        const packageJson = `${process.cwd()}/package.json`;
        output.notice(`Installing aliases to ${packageJson}`);

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
            output.error('Empty selection, exiting ...');
            return;
        }

        const confirmed = await confirm({
            message: `Do you really want to add selected aliases to the ${packageJson}?`
        });

        if (!confirmed) {
            output.error('Exiting ...');
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

            output.success(`Aliases installed in ${packageJson}`);
        } catch (err) {
            console.error(err);
            return;
        }
    }
};