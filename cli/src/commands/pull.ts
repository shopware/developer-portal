import getDeveloperPortalPath from "../flow/getDeveloperPortalPath";

export default {
    name: 'pull',
    description: 'Pull docs and install new dependencies',
    options: [],
    handler: async ({}, program: any) => {

        const dir = await getDeveloperPortalPath();

        console.log(
            'PULLING',
            dir,
            'git pull --ff',
            'pnpm i',
        );

    }
};