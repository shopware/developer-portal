import {createSandbox, destroySandbox, docsCli, timeout, withDirConfig} from "../helpers";
import {prepareDeveloperPortalCheckout} from "../prepare";

describe('cli link', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    test('Default link (empty)', async () => {
        const result = await docsCli(['link'], sandbox.cwd, timeout.low);

        expect(result.stdout).toContain('Linking docs directory');
    })

    test('Link configured paths', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        prepareDeveloperPortalCheckout(sandbox);

        const result = await docsCli(['link'], sandbox.cwd, timeout.medium);

        expect(result.stdout).toContain('Linking docs directory');
    })
})