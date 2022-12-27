import {Embedded} from "../page-objects/embedded";

describe('render correct content', async () => {
    let embeddedPage: Embedded;

    beforeAll(async () => {
        embeddedPage = new Embedded(page);
        await embeddedPage.open('/resources/meteor-component-library/')
    })

    test('has search', async () => {
        return;
        const searchLocator = await embeddedPage.page.locator('input[name="searchbar"]');
        expect(await searchLocator.count()).toEqual(1);
    })
})