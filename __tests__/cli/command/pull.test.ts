import {createSandbox, destroySandbox, docsCli, timeout, createConfig, withDirConfig} from "../helpers";
import {execSync} from "child_process";

describe('cli pull', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    test('Default pull (empty)', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        const developerPortalDir = `${sandbox.projectsPath}/developer-portal`;
        execSync(`git clone --depth 1 -b main https://github.com/shopware/developer-portal.git ${developerPortalDir}`);

        const result = await docsCli(['pull'], sandbox.dir, timeout.medium);

        // test "git pull --ff" and "pnpm i"
        expect(result.stdout).toContain('Up to date');
        expect(result.stdout).toContain('Done in ');
    })
})