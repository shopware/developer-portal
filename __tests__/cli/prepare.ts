import {execSync} from "child_process";

export const prepareDeveloperPortalCheckout = (sandbox) => {
    const developerPortalDir = `${sandbox.projectsPath}/developer-portal`;
    execSync(`git clone --depth 1 -b main https://github.com/shopware/developer-portal.git ${developerPortalDir}`);
}