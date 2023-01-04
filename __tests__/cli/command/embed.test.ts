import {createConfig, createSandbox, destroySandbox, docsCli, terminates, timeout} from "../helpers";
import fs from "fs-extra";

describe('cli embed', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    test('Default embed (empty)', async () => {
        const result = await terminates(docsCli(['embed'], sandbox.cwd, timeout.low));

        expect(result.stdout).toContain('Embedding repositories');
        // terminates
        expect(result.stdout.split("\n").reverse()[0]).toContain('Enter root path for ALL of your projects');
    })

    test('Default embed (partial)', async () => {
        createConfig(sandbox.projectsPath, {
            'dir.root': sandbox.projectsPath,
        });
        const result = await terminates(docsCli(['embed'], sandbox.cwd, timeout.low));

        expect(result.stdout).toContain('Embedding repositories');
        // terminates
        expect(result.stdout).toContain('No value for dir.developer-portal');
        expect(result.stdout).toContain('Enter path for your local install of developer-portal');
    })

    // vars are added to CI secrets OR read from parent dir
    const secrets = {
        GITLAB_FRONTENDS_USERNAME: process.env.GITLAB_FRONTENDS_USERNAME,
        GITLAB_FRONTENDS_ACCESS_KEY: process.env.GITLAB_FRONTENDS_ACCESS_KEY,
        FIGMA_TOKEN: process.env.FIGMA_TOKEN,
        FIGMA_FILE: process.env.FIGMA_FILE,
    };

    Object.keys(secrets).forEach(secret => {
        if (secrets[secret]) {
            return;
        }

        if (!fs.existsSync(`../.docs-cli/${secret}`)) {
            return;
        }

        // perse from parent (local) env config
        secrets[secret] = JSON.parse(fs.readFileSync(`../.docs-cli/${secret}`));
    });

    test.skipIf(!Object.values(secrets)[0])('Embed configured paths', async () => {

        createConfig(sandbox.projectsPath, {
            'dir.root': sandbox.projectsPath,
            'dir.developer-portal': `${sandbox.projectsPath}/developer-portal`,
            ...secrets,
        });

        const result = await docsCli(['embed'], sandbox.cwd, timeout.high);

        expect(result.stdout).toContain('Embedding repositories');

        expect(result.stdout).toContain('Embedding shopware/frontends');
        expect(result.stdout).toContain('Embedding shopware/admin-extension-sdk');
        expect(result.stdout).toContain('Embedding shopware/meteor-icon-kit');
        expect(result.stdout).toContain('Embedding shopware/meteor-component-library');

        expect(result.stdout).toContain('Running additional steps');
        // long-running
    }, timeout.high.timeout)
})