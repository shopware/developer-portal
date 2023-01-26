import {Visual} from "./page-objects/visual";
import slugify from "slugify";

const {toMatchImageSnapshot} = require('jest-image-snapshot');

expect.extend({toMatchImageSnapshot});

describe('check regression for all pages', async () => {
    let visualPage: Visual;

    beforeAll(async () => {
        visualPage = new Visual(page);
    })

    test.runIf(true || process.env.REGRESSION === 'true')('pages', async () => {
        const pages = await visualPage.getAllPages();

        let i = 0;
        for (const url of pages) {
            i++;
            try {
                console.log(`[${i}/${pages.length}] ${url}`);
                await goto(url);
                await page.waitForLoadState('networkidle');
                const image = await page.locator('#VPContent main').screenshot({
                    fullPage: true,
                    animations: 'disabled',
                    caret: 'hide',
                    scale: 'css',
                    mask: [
                        page.locator('header.VPNav')
                    ]
                });

                let identifier = slugify(url);
                if (url.endsWith('/')) {
                    identifier = `${identifier}--index`;
                }

                await expect(image).toMatchImageSnapshot({
                    customSnapshotIdentifier: identifier,
                    //updatePassedSnapshot: true,
                });
            } catch (e) {
                console.log(e);
            }
        }

        /*for (const url of pages) {
            await visualPage.visualTest(url);
        }*/
    }, 15 * 60 * 1000)
})