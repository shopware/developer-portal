import {Embedded} from "../page-objects/embedded";
import {eachLocator} from "../utils/locator";

describe.skip('render correct content', async () => {
    let embeddedPage: Embedded;
    const fourOhFour = [];

    beforeAll(async () => {
        embeddedPage = new Embedded(page);
        page.on('response', async (response) => {
            if (response.request().resourceType() === 'image' && response.status() === 404) {
                fourOhFour.push(response);
            }
        });
        await embeddedPage.open('/resources/meteor-icon-kit/')
    })

    test('has search', async () => {
        const searchLocator = await embeddedPage.page.locator('input[name="searchbar"]');
        expect(await searchLocator.count()).toEqual(1);
    })

    test('loads all icons', async() => {
        await embeddedPage.page.waitForLoadState('networkidle');

        const solidLocator = await embeddedPage.page.locator('button#solid');
        await solidLocator.click();

        await embeddedPage.page.waitForLoadState('networkidle');

        if (fourOhFour.length !== 0) {
            console.error('Some resources responded with code 404', ...fourOhFour.map(response => response.url()));
        }

        expect(fourOhFour.length).toEqual(0);
    })
})