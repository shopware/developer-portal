import {sh} from "../helpers";
import {optionDst, optionSrc} from "../options";

export default {
    name: 'copy',
    description: 'Copy <src> to <dst>',
    options: [
        optionSrc,
        optionDst
    ],
    handler: async ({src, dst}, program: any) => {

        console.log(
            'COPYING',
        );

        const response = await sh(`.github/scripts/cp.sh`, [
            src,
            dst,
        ], {env: {}});

        console.log(response.stdout);
    }
};