import {sh} from "../helpers";
import {optionSrc, optionDst} from "../options";
import {output} from "../output";
import {repositories} from "../data";
import inquirer from "inquirer";
import {storage} from "../storage";

const composeRepository = (repo: string, {git, org, user, pass}: { [key: string]: string }) => {
    // append git
    if (!repo.endsWith('.git')) {
        repo = `${repo}.git`;
    }

    // append org
    if (!repo.includes('/')) {
        repo = `${org}/${repo}`;
    }

    // append org
    if (!repo.includes('shopware/')) {
        repo = `${org || 'shopware'}/${repo}`;
    } else if (org) {
        // replace org
        repo = repo.replace('shopware/', `${org}/`);
        //repo = `${org}/${repo.split('/').slice(1).join('/')}`;
    }

    // append git
    if (!repo.includes('gitlab.com') && !repo.includes('github.com')) {
        repo = `${git || 'github.com'}/${repo}`;
    } else if (git) {
        // replace org
        repo = repo
            .replace('github.com', git)
            .replace('gitlab.com', git);
    }

    // add user
    if (!repo.includes('git@')) {
        if (repo.includes('//')) {
            repo = repo.replace('//', `//git@`)
        } else {
            repo = `git@${repo}`;
        }
    }

    if (user && pass) {
        // replace user and pass
        repo = repo.replace('git@', `${user}:${pass}@`);
    } else if (user) {
        // replace user
        repo = repo.replace('git@', `${user}@`);
    }

    // add schema
    if (!repo.includes('ssh://') && !repo.includes('ssh://')) {
        repo = `https://${repo}`;
    } else {
        // replace schema to https
        repo = repo.replace('ssh://', 'https://');
    }

    // remove schema (clone.sh)
    repo = repo.replace('https://', '');

    return repo;
}
export default {
    name: 'clone',
    description: 'Clone <src> from <branch> in <repository> to <dst>',
    options: [
        {
            name: 'r --repository <repository>',
            example: 'frontends | shopware/frontends | shopware/frontends.git | ssh://git@gitlab.com/shopware/frontends.git | github.com/shopware/frontends.git'
        },
        {
            name: 'b --branch <branch>',
            defaultValue: 'main'
        },
        optionSrc,
        optionDst,
        {
            name: 'o --org <org>',
            defaultValue: 'shopware'
        },
        {
            name: 'u --user <user>',
            defaultValue: 'git'
        },
        {
            name: 'p --pass <pass>',
            defaultValue: null
        },
        {
            name: 'g --git <git>',
            defaultValue: 'github.com'
        },
    ],
    handler: async ({repository, branch, src, dst, org, user, pass, git}: { [key: string]: string }, program: any) => {

        repository = composeRepository(repository, {git, org, user, pass});

        output.notice(`Cloning ${repository}`);

        const env: { [key: string]: string } = {};
        for (const repo of repositories) {
            if (typeof repo !== 'object') {
                continue;
            }

            for (const key of Object.keys(repo.env || {})) {
                const saved = storage.get(key);
                if (saved) {
                    output.notice(`Exists ${key}`);
                    env[key] = saved;
                    continue;
                }

                const {value} = await inquirer.prompt([
                    {
                        name: 'value',
                        type: 'password',
                        // @ts-ignore
                        message: `${repo.env[key]} - ${key}`,
                    }
                ]);

                storage.set(key, value);
            }
        }

        console.log(env, repository);
        await sh(`.github/scripts/clone.sh`, [
            repository,
            branch,
            src,
            dst,
        ], {
            env
        });

        output.success(`Cloned ${repository}`);

    }
};