import {Embedded} from "../page-objects/embedded";

describe('render correct content', async () => {
    let embeddedPage: Embedded;

    beforeAll(async () => {
        embeddedPage = new Embedded(page);
        await embeddedPage.open('/resources/meteor-component-library/')
    })

    test('has sidebar', async () => {
        const urls = [
            '/resources/meteor-component-library/component/',
            '/resources/meteor-component-library/directive/',
        ];
        for (const url of urls) {
            await embeddedPage.open(url)
            await embeddedPage.hasSidebarSections(2);
        }
    })
})