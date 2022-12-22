import {Command} from "commander";
import {commands} from './commands';
import {output} from './output';

export interface MyCommand {
    name: string,
    handler: Function,
    description: string,
    options?: [],
    args?: [],
    commands?: MyCommand[]
}

const createCommand = (program: Command, {name, description, options, handler, args, commands}: MyCommand) => {
    // add command
    const command = program
        .command(name)
        .description(description || '');

    if (!commands) {
        // register arguments and options
        registerCommand(command, {args, options, handler});
        return;
    }

    // register sub-commands
    commands.forEach((subcommand) => {
        createCommand(program, {...subcommand, name: `${name}:${subcommand.name}`});
    })

    // register handler
    const availableCommands = commands.map((command) => `${name}:${command.name}`).join("\n");
    command.action(() => output.log(`Available commands: \n${availableCommands}`))
}

const registerCommand = (command: Command, {
    args,
    options,
    handler
}: { args?: [], options?: [], handler: Function }) => {
    // register arguments
    args && args.forEach(({name, description, defaultValue, example}) => {
        command.command(`<${name}>`, description || name, defaultValue || example || null);
    });

    // register options
    options && options.forEach(({name, description, defaultValue, example}) => {
        command.option(`--${name}`, description || name, defaultValue || example || null);
    });

    // register handler
    command.action((str, options) => {
        try {
            const {verbose, debug} = options.opts();

            if (verbose) {
                output.setVerbose(true);
            }

            if (debug) {
                output.setDebug(true);
            }

            // @ts-ignore
            (handler || ((str, options, cli) => {
                output.error('Empty handler');
            }))(str, options, cli);
        } catch (e) {
            output.error(e);
        }
    })
}

const cli = {
    run() {
        const program = new Command();

        program
            .name('docs-cli')
            .description('Shopware Docs CLI')
            .version('0.0.1');

        // more data
        program.option('--vv', '--verbose');

        // all data
        program.option('--vvv', '--debug');

        // register commands
        commands.forEach(command => createCommand(program, command));

        try {
            program.parse();
        } catch (e) {
            output.error(e);
        }
    }
};

export default cli;