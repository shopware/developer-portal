import {Embedded} from "../page-objects/embedded";

describe('render correct content', async () => {
    let embeddedPage: Embedded;

    beforeAll(async () => {
        embeddedPage = new Embedded(page);
        await embeddedPage.open('/frontends/')
    })

    test.skip('active navigation', async () => {
        await embeddedPage.hasActiveNavigation('Frontends');
    })

    test.skip('has sidebar', async () => {
        await embeddedPage.hasSidebarSections(5);
    })

    test('has github link', async () => {
        await embeddedPage.hasGitHubLink('shopware/frontends');
    })

    test.skip('all sub-pages work', async () => {
        await embeddedPage.validateSidebar();
    })
})