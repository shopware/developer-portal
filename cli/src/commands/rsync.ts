import {sh} from "../helpers";
import {optionDst, optionSrc} from "../options";
import getDeveloperPortalPath from "../flow/getDeveloperPortalPath";

export default {
    name: 'rsync',
    description: 'Reync <src> to <dst>',
    options: [
        optionSrc,
        optionDst
    ],
    handler: async ({src, dst}, program: any) => {

        const dir = await getDeveloperPortalPath();

        const response = await sh(`.github/scripts/rsync.sh`, [
            src,
            dst,
        ], {env: {}});

        console.log(response.stdout);
    }
};