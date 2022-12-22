import {env} from "process";

export const repositories = [
    /*{
        name: 'shopware/docs',
        src: 'docs',
        dst: 'docs/docs',
    },*/
    {
        name: 'shopware/frontends',
        src: 'apps/docs/src',
        dst: 'frontends',
        branch: env.BRANCH_FRONTENDS || 'main',
    },
    {
        name: 'gitlab.com/shopware/frontends',
        src: 'apps/docs/src',
        dst: 'frontends-gl',
        branch: env.BRANCH_FRONTENDS || 'DX-202' || 'main',
        env: {
            GITLAB_FRONTENDS_USERNAME: 'GitLab deploy key username',
            GITLAB_FRONTENDS_ACCESS_KEY: 'GitLab deploy key',
        }
    },
    {
        name: 'shopware/admin-extension-sdk',
        src: 'docs/docs/guide',
        dst: 'resources/admin-extension-sdk',
        branch: env.BRANCH_ADMIN_EXTENSION_SDK || 'DX-223' || 'main',
    },
    {
        name: 'shopware/meteor-icon-kit',
        src: 'docs',
        dst: 'resources/meteor-icon-kit',
        branch: env.BRANCH_METEOR_ICON_KIT || 'DX-223' || 'main',
        env: {
            FIGMA_FILE: 'Figma file ID',
            FIGMA_API_KEY: 'Figma API key',
        }
    },
    /*{
        name: 'shopware/meteor-component-library',
    },*/
];