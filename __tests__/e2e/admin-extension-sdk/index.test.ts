import {Embedded} from "../page-objects/embedded";

describe('render correct content', async () => {
    let embeddedPage: Embedded;

    beforeAll(async () => {
        embeddedPage = new Embedded(page);
        await embeddedPage.open('/resources/admin-extension-sdk/')
    })

    test('has heading', async () => {
        const headingLocator = await embeddedPage.page.locator('h1');
        expect(await headingLocator.allTextContents()).toEqual(['Admin Extension SDK #', 'Introduction #']);
    })
})