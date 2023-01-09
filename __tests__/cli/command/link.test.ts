import {createSandbox, destroySandbox, docsCli, terminates, timeout, withDirConfig} from "../helpers";
import {prepareDeveloperPortalCheckout, prepareDummySource} from "../prepare";
import fs from "fs-extra";

describe('cli link', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    const expectSuccess = (result) => {
        expect(result.stdout).toContain('Linking docs directory');
        expect(result.stdout).toContain('Docs directory linked');
    }

    test('Default link (empty)', async () => {
        const result = await terminates(docsCli(['link'], sandbox.cwd, timeout.low));

        expect(result.stdout).toContain('Linking docs directory');
        // terminates
        expect(result.stdout).toContain('Mount source');
        expect(result.stdout).not.toContain('Docs directory linked');
    })

    test('Link configured paths', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        prepareDeveloperPortalCheckout(sandbox);
        prepareDummySource(sandbox);

        // mount folder to folder
        const result = await docsCli(['link', '--src', 'foo', '--dst', 'dst-foo'], sandbox.cwd, timeout.medium);

        expectSuccess(result);

        expect(fs.lstatSync(`${sandbox.developerPortal}/src/dst-foo`).isDirectory()).toBeTruthy();
        expect(fs.lstatSync(`${sandbox.developerPortal}/src/dst-foo/bar.md`).isFile()).toBeTruthy();
    })

    test('Link configured paths with dot (root to folder)', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        prepareDeveloperPortalCheckout(sandbox);
        prepareDummySource(sandbox);

        // mount root to root
        const result = await docsCli(['link', '--src', '.', '--dst', 'dst-foo'], sandbox.cwd, timeout.medium);

        expectSuccess(result);

        expect(fs.lstatSync(`${sandbox.developerPortal}/src/dst-foo`).isDirectory()).toBeTruthy();
        expect(fs.lstatSync(`${sandbox.developerPortal}/src/dst-foo/foo`).isDirectory()).toBeTruthy();
        expect(fs.lstatSync(`${sandbox.developerPortal}/src/dst-foo/root.md`).isFile()).toBeTruthy();
        expect(fs.lstatSync(`${sandbox.developerPortal}/src/dst-foo/foo/bar.md`).isFile()).toBeTruthy();
    })

    test('Link configured paths with dot (root to root)', async () => {
        withDirConfig(sandbox);

        // prepare developer-portal checkout
        prepareDeveloperPortalCheckout(sandbox);
        prepareDummySource(sandbox);

        // mount root to root
        const result = await docsCli(['link', '--src', '.', '--dst', '.'], sandbox.cwd, timeout.medium);

        expectSuccess(result);

        expect(fs.lstatSync(`${sandbox.developerPortal}/src/foo`).isDirectory()).toBeTruthy();
        expect(fs.lstatSync(`${sandbox.developerPortal}/src/root.md`).isFile()).toBeTruthy();
        expect(fs.lstatSync(`${sandbox.developerPortal}/src/foo/bar.md`).isFile()).toBeTruthy();
    })
})