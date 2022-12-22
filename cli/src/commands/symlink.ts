import {requireParam, sh} from "../helpers";
import {optionSrc, optionDst} from "../options";
import getDeveloperPortalPath from "../flow/getDeveloperPortalPath";

export default {
    name: 'symlink',
    description: 'Symlink <src> from <branch> in <repository> to <dst>',
    options: [
        optionSrc,
        optionDst
    ],
    handler: async (params: { src?: string, dst?: string }, program: any) => {

        const dir = await getDeveloperPortalPath();

        const src = await requireParam(params, optionSrc);
        const dst = await requireParam(params, optionDst);

        const response = await sh(`.github/scripts/ln.sh`, [
            src,
            dst,
        ], {env: {}});

        console.log(response.stdout);
    }
};