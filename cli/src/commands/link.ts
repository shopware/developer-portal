import {requireParam, sh} from "../helpers";
import {optionDst, optionSrc} from "../options";
import {output} from "../output";

export default {
    name: 'link',
    description: 'Copy <src> from current working directory to <dst> in developer-portal',
    options: [
        optionSrc,
        optionDst,
        {
            name: 'ln --symlink',
            description: 'Use ln command',
        },
        {
            name: 'rs --rsync',
            description: 'Use rsync command',
        },
        {
            name: 'cp --copy',
            description: 'Use copy command',
        },
    ],
    handler: async ({
                        src,
                        dst,
                        symlink,
                        rsync,
                        copy
                    }: { src?: string, dst?: string, symlink?: boolean, rsync?: boolean, copy?: boolean }) => {

        // validate strategy
        if (((symlink ? 1 : 0) + (rsync ? 1 : 0) + (copy ? 1 : 0)) > 1) {
            output.error('You can use only one link strategy - symlink, rsync or copy');
            return;
        }

        output.notice('Linking docs directory');

        const strategy = symlink
            ? 'ln'
            : (rsync ? 'sync' : 'cp');

        src = await requireParam(src, optionSrc);
        dst = await requireParam(dst, optionDst);

        // @T00D00 - refactor
        await sh(`.github/scripts/${strategy}.sh`, [
            src,
            dst,
        ]);

        output.success('Docs directory linked');
    }
};