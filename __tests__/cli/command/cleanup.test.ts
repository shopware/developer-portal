import {createSandbox, destroySandbox, docsCli, timeout, withDirConfig} from "../helpers";
import {prepareDeveloperPortalCheckout} from "../prepare";

describe('cli cleanup', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    test('Default cleanup (empty)', async () => {
        const result = await docsCli(['cleanup'], sandbox.cwd, timeout.low);

        expect(result.stdout).toContain('Removing symlinks and copied dirs');
        expect(result.stdout).toContain('Project cleaned up');
    })

    test('Cleanup configured paths', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        prepareDeveloperPortalCheckout(sandbox);

        const result = await docsCli(['cleanup'], sandbox.cwd, timeout.medium);

        expect(result.stdout).toContain('Removing symlinks and copied dirs');
        expect(result.stdout).toContain('Project cleaned up');
    })
})