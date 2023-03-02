import {Stoplight} from "../page-objects/stoplight";

describe('render correct content', async () => {
    let embeddedPage: Stoplight;

    beforeAll(async () => {
        embeddedPage = new Stoplight(page);
        await embeddedPage.open('/resources/api/store-api-reference.html')
    })

    test('has stoplight element', async () => {
        await embeddedPage.hasStoplightElement();
    })

    test.skip('has heading', async () => {
        await embeddedPage.hasHeading('Shopware Store API');
    })

    test.skip('has sidebar', async () => {
        await embeddedPage.hasSidebar();
    })
})