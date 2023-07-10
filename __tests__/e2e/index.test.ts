describe('render correct content', async () => {
    beforeAll(async () => {
        await goto('/')
    })

    test.skip('navigation', async() => {
        const navBarLocator = page.locator('.VPNavBarMenu > .VPNavBarMenuLink');
        const links = await navBarLocator.allTextContents()
        expect(links).toEqual(['Apps', 'Themes', 'Frontends', 'Integrations'])

        const subNavBarLocator = page.locator('.VPNavBarMenu > .VPNavBarMenuGroup > button .text');
        const groupLinks = await subNavBarLocator.allTextContents()
        expect(groupLinks.map(text => text.trim())).toEqual(['Resources'])
    })

    test.skip('main content', async () => {
        const h1Locator = page.locator('.VPContent h1')

        const h1Contents = await h1Locator.allTextContents()

        expect(h1Contents).toEqual(['Shopware Developer Documentation'])
    })

    test('outline', async () => {
        const outlineLinksLocator = page.locator(
            '.VPDocAsideOutline .root .outline-link'
        )

        const outlineLinksCount = await outlineLinksLocator.count()
        //expect(outlineLinksCount).toEqual(4)
    })

    test('no sidebar', async() => {
        const sidebarLocator = page.locator('.VPSidebar h2.title-text');
        expect(await sidebarLocator.count()).to.equal(0);
    })

    test('has search', async() => {
        const searchLocator = page.locator('#docsearch');
        expect(await searchLocator).not.to.be.null;
    })
})