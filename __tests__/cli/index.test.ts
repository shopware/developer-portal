import {createProgram, terminates, docsCli, createSandbox, destroySandbox} from "./helpers";

describe('CLI', async () => {
    let sandbox;
    beforeEach(() => {
        sandbox = createSandbox();
    })

    afterEach(() => {
        sandbox = destroySandbox(sandbox);
    })

    test('No args and params', async () => {
        const program = createProgram([]);

        const opts = program.opts();
        expect(Object.keys(opts).length).toEqual(3);
        expect(opts.version).toEqual('0.0.1');
        expect(opts.vv).toBeUndefined();
        expect(opts.vvv).toBeUndefined();

        const args = program.args;
        expect(args.length).toEqual(0);
    })

    test('Verbose', async () => {
        const program = createProgram(['--vv']);

        const opts = program.opts();
        expect(Object.keys(opts).length).toEqual(3);
        expect(opts.vv).toBeTruthy();
    })

    test('Debug', async () => {
        const program = createProgram(['--vvv']);

        const opts = program.opts();
        expect(Object.keys(opts).length).toEqual(3);
        expect(opts.vvv).toBeTruthy();
    })

    test('Version', async () => {
        const result = await docsCli(["--version"], '.');

        expect(result.code).toBe(0);
        expect(result.error).toBeNull();
        expect(result.stderr).toBe('');
        expect(result.stdout).toBe('0.0.1');
    })

    test('Help', async () => {
        const result = await docsCli(["help"], '.');
        const defaultResult = await docsCli([], '.');

        expect(result.stdout).toBe(defaultResult.stderr);

        expect(defaultResult.code).toBe(1);
        expect(defaultResult.stdout).toBe('');

        expect(result.code).toBe(0);
        expect(result.stderr).toBe('');
    })

    /*test('Install', async () => {
        const result = await terminates(myCli(["install"], '.'));

        expect(result.error.signal).toEqual('SIGTERM');
        expect(result.stdout).toContain('Pick aliases that you would like to install');
    })

    test('Embed', async () => {
        const result = await terminates(myCli(["embed"], cwd));

        expect(result.error.signal).toEqual('SIGTERM');
        expect(result.stdout).toContain('Embedding repositories');
    })

    test('Clone', async () => {
        const result = await terminates(myCli(["clone"], cwd));

        expect(result.error.signal).toEqual('SIGTERM');
        expect(result.stdout).toContain('Pick aliases that you would like to install');
    })

    test('Link', async () => {
        const result = await terminates(myCli(["link"], cwd));

        expect(result.error.signal).toEqual('SIGTERM');
        expect(result.stdout).toContain('Pick aliases that you would like to install');
    })

    test('Remove', async () => {
        const result = await terminates(myCli(["remove"], cwd));

        expect(result.error.signal).toEqual('SIGTERM');
        expect(result.stdout).toContain('Pick aliases that you would like to install');
    })

    test('Preview', async () => {
        const result = await terminates(myCli(["preview"], cwd));

        expect(result.error.signal).toEqual('SIGTERM');
        expect(result.stdout).toContain('Pick aliases that you would like to install');
    })

    test('Build', async () => {
        const result = await terminates(myCli(["build"], '.'));

        expect(result.error.signal).toEqual('SIGTERM');
        expect(result.stdout).toContain('Pick aliases that you would like to install');
    })

    test('Test', async () => {
        const result = await terminates(myCli(["test"], cwd));

        expect(result.error.signal).toEqual('SIGTERM');
        expect(result.stdout).toContain('Pick aliases that you would like to install');
    })

    test('Pull', async () => {
        const result = await myCli(["pull"], cwd, midTimeout);

        console.log(result);
        expect(result.error).toBeNull();
        expect(result.stdout).toContain('Pulling from git');
        expect(result.stdout).toContain('Installing new packages');
    })*/
})