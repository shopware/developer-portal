describe('catch some bugs', async () => {
    beforeAll(async () => {
        await goto('/')
    })

    /*test('has no console errors', async () => {
        page.on('console', msg => console.log(msg.text()));
    })*/

    test.runIf(process.env.NODE_ENV === 'production')('has custom components on renavigation', async () => {
        const expectSwitcher = async (num: number, type: string) => expect(await page.locator('.SwagSidebarVersionSwitcher').count(), type).toEqual(num, type);
        const expectFooter = async (type) => expect(await page.locator('.SwagFooter').count(), type).toEqual(1, type);

        const onTheArticle = async(type: string) => {
            await page.locator('.SwagGetToKnow .SwagCard:first-child').click();
            await expectSwitcher(1, type);
            await expectFooter(type);
        }

        await goto('/');

        await expectSwitcher(0, 'first');

        // navigate from the homepage
        await onTheArticle('initial');

        // navigate to the homepage
        await page.locator('a.VPNavBarTitle').click();
        await expectSwitcher(0, 'second');
        await expectFooter('second');

        // navigate from the homepage
        await onTheArticle('last');
    });

    test('content count', async () => {
        const contentLocator = page.locator('.VPContent')

        expect(await contentLocator.count()).toEqual(1)
    })
})