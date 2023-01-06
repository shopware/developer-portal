import {Stoplight} from "../page-objects/stoplight";

describe('render correct content', async () => {
    let embeddedPage: Stoplight;

    beforeAll(async () => {
        embeddedPage = new Stoplight(page);
        await embeddedPage.open('/resources/api/admin-api-reference.html')
    })

    test('has stoplight element', async () => {
        await embeddedPage.hasStoplightElement();
    })

    test('has heading', async () => {
        await embeddedPage.hasHeading('Shopware Admin API');
    })

    test('has sidebar', async () => {
        await embeddedPage.hasSidebar();
    })
})