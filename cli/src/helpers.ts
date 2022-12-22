import {resolve} from "path";
import process from "process";
import {execa, ExecaChildProcess, execaSync} from "execa";
import inquirer from "inquirer";
import getDeveloperPortalPath from "./flow/getDeveloperPortalPath";

const pipe = (subprocess: ExecaChildProcess) => {
    subprocess.stdout?.pipe(process.stdout);
    subprocess.stderr?.pipe(process.stderr);

    return subprocess;
};

//export const wd = resolve(`${process.cwd()}/../`);
export const pnpm = async (run: string, args: string[], options: { dir?: string, [key: string]: any }) => {
    const cwd = options.dir || await getDeveloperPortalPath();

    // @ts-ignore
    return pipe(execa(`pnpm`, [
        '--dir',
        cwd,
        'run',
        run,
        ...args
    ], {
        cwd,
        ...options,
    }));
}
export const npm = async (run: string, args: string[], options: { dir?: string, [key: string]: any }) => {
    const cwd = options.dir || await getDeveloperPortalPath();

    return pipe(execa(`npm`, [
        '--prefix',
        cwd,
        'run',
        run,
        ...args
    ], {
        cwd,
        ...options,
    }));
}
export const sh = async (run: string, args: string[], options: { dir?: string, [key: string]: any }) => {
    const cwd = options.dir || await getDeveloperPortalPath();

    return pipe(execa(`sh`, [
        `${cwd}/${run}`,
        ...args
    ], {
        cwd,
        ...options,
    }));
}

export const choices = (choices: { [key: string]: string }) => {
    return Object.keys(choices).reduce((reduced, key) => {
        if (choices[key] === 'separator') {
            // @ts-ignore
            reduced.push(new inquirer.Separator());
            return reduced;
        }
        reduced.push({value: key, name: `${key} - ${choices[key]}`});
        return reduced;
    }, <{ value: string, name: string }[]>[])
}

export const requireParam = async (options: { [key: string]: string }, option: { name: string, description?: string }): Promise<string> => {
    const name = option.name.split('<')[1].split('>')[0];

    if (options[name]) {
        return options[name];
    }

    let {param} = await inquirer.prompt([
        {
            type: 'input',
            name: 'param',
            message: option.description || option.name,
            default: null,
        }
    ]);

    return param;
}