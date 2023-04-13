import {Visual} from "./page-objects/visual";
import {eachLocator} from "./utils/locator";

describe('crawl all pages', async () => {
    let visualPage: Visual;

    beforeAll(async () => {
        visualPage = new Visual(page);
    })

    test.runIf(process.env.CRAWL === '1')('pages', async () => {
        const pages = await visualPage.getAllPages();

        const missing = [];

        let i = 0;
        for (const url of pages) {
            i++;
            try {
                console.log(`[${i}/${pages.length}] ${url}`);
                await goto(url);
                await page.waitForLoadState('networkidle');

                // locate all PageRef components
                const pageRefs = await page.locator('div[page] > a > div > div');

                // reduce them to the href and text
                const texts = await eachLocator(pageRefs, async (element) => {
                    return {
                        href: await element.locator('..').locator('..').getAttribute('href'),
                        text: (await element.textContent()).trim(),
                    };
                })

                // collect them
                texts.filter(({text}) => !text?.length)
                    .reduce((missing, element) => {
                        const incorrect = {page: url, ...element};
                        console.log(incorrect);
                        missing.push(incorrect)
                        return missing;
                    }, missing);

            } catch (e) {
                console.log(e);
            }
        }

        console.log(missing);
    }, 45 * 60 * 1000)
})