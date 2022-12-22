import clone from "./commands/clone";
import install from "./commands/install";
import copy from "./commands/copy";
import symlink from "./commands/symlink";
import remove from "./commands/remove";
import rsync from "./commands/rsync";
import preview from "./commands/preview";
import build from "./commands/build";
import test from "./commands/test";
import pull from "./commands/pull";
import embed from "./commands/embed";

export const commands = [
    install,
    embed,
    clone,
    copy,
    symlink,
    remove,
    rsync,
    preview,
    build,
    test,
    pull,
];