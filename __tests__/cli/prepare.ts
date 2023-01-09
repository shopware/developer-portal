import {execSync} from "child_process";
import {repositories} from "../../cli/src/data";
import fs from "fs-extra";

export const prepareDeveloperPortalCheckout = (sandbox) => {
    execSync(`git clone --depth 1 -b DX-236 https://github.com/shopware/developer-portal.git ${sandbox.developerPortal}`);
}

export const prepareDeveloperPortalNpm = (sandbox) => {
    execSync(`pnpm --dir ${sandbox.developerPortal} i`, {cwd: sandbox.developerPortal});
}

export const prepareDeveloperPortalMounts = (sandbox) => {
    // fake mount points
    for (const repository of repositories) {
        fs.mkdirSync(`${sandbox.developerPortal}/src/${repository.dst}`, {recursive: true});
    }

    // fake static resources
    const resourceDirs = [
        'resources/meteor-icon-kit/public/icons/regular',
        'resources/meteor-icon-kit/public/icons/solid',
        'resources/admin-extension-sdk/api-reference/assets',
        'resources/admin-extension-sdk/api-reference/ui/assets',
        'resources/admin-extension-sdk/concepts/assets',
        'resources/admin-extension-sdk/getting-started/assets',
        'resources/admin-extension-sdk/internals/assets',
        'resources/admin-extension-sdk/tooling/assets',
    ];
    for (const dir of resourceDirs) {
        fs.mkdirSync(`${sandbox.developerPortal}/src/${dir}`, {recursive: true});
    }
}