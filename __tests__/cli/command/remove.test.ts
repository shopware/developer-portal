import {createSandbox, destroySandbox, docsCli, timeout, withDirConfig} from "../helpers";
import {prepareDeveloperPortalCheckout} from "../prepare";

describe('cli remove', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    test('Default remove (empty)', async () => {
        const result = await docsCli(['remove'], sandbox.cwd, timeout.low);

        expect(result.stdout).toContain('Removing symlinks and copied dirs');
        expect(result.stdout).toContain('Project cleaned up');
    })

    test('Remove configured paths', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        prepareDeveloperPortalCheckout(sandbox);

        const result = await docsCli(['remove'], sandbox.cwd, timeout.medium);

        expect(result.stdout).toContain('Removing symlinks and copied dirs');
        expect(result.stdout).toContain('Project cleaned up');
    })
})