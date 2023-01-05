import {createSandbox, destroySandbox, docsCli, timeout, withDirConfig, terminates} from "../helpers";
import {expectEmptyRootPath} from "../expect";
import {prepareDeveloperPortalCheckout} from "../prepare";

describe('cli test', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    test('Default test (empty)', async () => {
        const result = await terminates(docsCli(['test'], sandbox.cwd, timeout.low));

        // terminates
        expectEmptyRootPath(result);
    })

    test('Test configured paths', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        prepareDeveloperPortalCheckout(sandbox);

        const result = await docsCli(['test'], sandbox.cwd, timeout.medium);

        expect(result.stdout).toContain('Running test');
    })
})