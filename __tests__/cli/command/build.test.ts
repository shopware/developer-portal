import {createSandbox, destroySandbox, docsCli, timeout, withDirConfig, terminates} from "../helpers";
import {expectEmptyRootPath} from "../expect";
import {prepareDeveloperPortalCheckout} from "../prepare";

describe('cli build', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    test('Default build (empty)', async () => {
        const result = await terminates(docsCli(['build'], sandbox.cwd, timeout.low));

        // terminates
        expectEmptyRootPath(result);
    })

    test('Build configured paths', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        prepareDeveloperPortalCheckout(sandbox);

        const result = await docsCli(['build'], sandbox.cwd, timeout.medium);

        expect(result.stdout).toContain('Building docs');
    })
})