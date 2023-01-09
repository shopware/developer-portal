import {env} from "process";

export const repositories = [
    {
        name: 'shopware/docs',
        src: '.',
        dst: 'docs',
        branch: env.BRANCH_DOCS || 'refactor-vitepress-format' || 'main',
        org: env.ORG_DOCS || 'shopware',
    },
    {
        name: 'shopware/frontends',
        src: 'apps/docs/src',
        dst: 'frontends',
        branch: env.BRANCH_FRONTENDS || 'main',
        org: env.ORG_FRONTENDS || 'shopware',
    },
    {
        name: 'gitlab.shopware.com/product/engineering/platform-group/pwa/frontends',
        src: 'apps/docs/src',
        dst: 'frontends-gl',
        branch: env.BRANCH_FRONTENDS || 'DX-202' || 'main',
        org: env.ORG_FRONTENDS || 'shopware',
        env: {
            GITLAB_FRONTENDS_USERNAME: {
                as: 'user',
                description: 'GitLab deploy key username'
            },
            GITLAB_FRONTENDS_ACCESS_KEY: {
                as: 'pass',
                description: 'GitLab deploy key'
            },
        },
    },
    {
        name: 'shopware/admin-extension-sdk',
        src: 'docs/docs/guide',
        dst: 'resources/admin-extension-sdk',
        branch: env.BRANCH_ADMIN_EXTENSION_SDK || 'DX-223' || 'main',
        org: env.ORG_ADMIN_EXTENSION_SDK || 'shopware',
    },
    {
        name: 'shopware/meteor-icon-kit',
        src: 'docs',
        dst: 'resources/meteor-icon-kit',
        branch: env.BRANCH_METEOR_ICON_KIT || 'DX-223' || 'main',
        org: env.ORG_METEOR_ICON_KIT || 'bojanrajh',
        env: {
            FIGMA_FILE: {
                description: 'Figma file ID'
            },
            FIGMA_TOKEN: {
                description: 'Figma API key'
            },
        },
    },
    {
        name: 'shopware/meteor-component-library',
        src: 'docs',
        dst: 'resources/meteor-component-library',
        branch: env.BRANCH_METEOR_COMPONENT_LIBRARY || 'DX-231' || 'main',
        org: env.ORG_METEOR_COMPONENT_LIBRARY || 'bojanrajh',
    }
];