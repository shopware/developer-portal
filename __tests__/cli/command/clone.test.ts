import {createSandbox, destroySandbox, docsCli, timeout, withDirConfig} from "../helpers";
import {prepareDeveloperPortalCheckout} from "../prepare";

describe('cli clone', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    test('Default clone (empty)', async () => {
        const result = await docsCli(['clone'], sandbox.cwd, timeout.low);

        expect(result.stdout).toContain('Repository is required');
    })

    test('Clone configured paths', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        prepareDeveloperPortalCheckout(sandbox);

        const result = await docsCli(['clone', '--repository', 'frontends'], sandbox.cwd, timeout.medium);

        expect(result.stdout).toContain('Preparing frontends');
    })
})