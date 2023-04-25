import {execSync} from "child_process";
import {repositories} from "../../cli/src/data";
import fs from "fs-extra";

export const prepareDeveloperPortalCheckout = (sandbox) => {
    execSync(`git clone --depth 1 -b main https://github.com/shopware/developer-portal.git ${sandbox.developerPortal}`);
}

export const prepareDeveloperPortalNpm = (sandbox) => {
    execSync(`pnpm --dir ${sandbox.developerPortal} i`, {cwd: sandbox.developerPortal});
}

export const prepareDeveloperPortalMounts = (sandbox) => {
    // fake mount points
    for (const repository of repositories) {
        fs.mkdirSync(`${sandbox.developerPortal}/src/${repository.dst}`, {recursive: true});
    }

    // fake nested mount-points
    const faked = [
        'docs/guides/plugins/apps/',
        'docs/guides/plugins/themes/',
        'docs/guides/plugins/plugins/',
        'docs/guides/integrations-api/',
    ];
    faked.forEach(dir => fs.mkdirSync(`${sandbox.developerPortal}/src/${dir}`, {recursive: true}));

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

export const prepareDummySource = (sandbox) => {
    const dirs = [
        'foo',
        'foo/bar',
    ];
    for (const dir of dirs) {
        fs.mkdirSync(`${sandbox.cwd}/${dir}`, {recursive: true});
    }

    const files = [
        'root.md',
        'foo/index.md',
        'foo/bar.md',
        'foo/bar/index.md',
        'foo/bar/baz.md',
    ];
    for (const file of files) {
        fs.writeFileSync(`${sandbox.cwd}/${file}`, file);
    }
}