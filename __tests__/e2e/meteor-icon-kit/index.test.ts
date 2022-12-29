import {Embedded} from "../page-objects/embedded";
import {eachLocator} from "../utils/locator";

describe('render correct content', async () => {
    let embeddedPage: Embedded;

    beforeAll(async () => {
        embeddedPage = new Embedded(page);
        await embeddedPage.open('/resources/meteor-icon-kit/')
    })

    test('has search', async () => {
        const searchLocator = await embeddedPage.page.locator('input[name="searchbar"]');
        expect(await searchLocator.count()).toEqual(1);
    })
})