import clone from "./commands/clone";
import install from "./commands/install";
import link from "./commands/link";
import remove from "./commands/remove";
import preview from "./commands/preview";
import build from "./commands/build";
import test from "./commands/test";
import pull from "./commands/pull";
import embed from "./commands/embed";
import {MyCommand} from "./cli";

export const commands: MyCommand[] = [
    // @ts-ignore
    install,
    // @ts-ignore
    embed,
    // @ts-ignore
    clone,
    // @ts-ignore
    link,
    // @ts-ignore
    remove,
    // @ts-ignore
    preview,
    // @ts-ignore
    build,
    // @ts-ignore
    test,
    // @ts-ignore
    pull,
];