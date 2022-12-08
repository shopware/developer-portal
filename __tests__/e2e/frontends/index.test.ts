describe('render correct content', async () => {
    beforeAll(async () => {
        await goto('/frontends/')
    })

    test('active navigation', async() => {
        const navBarLocator = page.locator('.VPNavBarMenu > .VPNavBarMenuLink.active');
        const links = await navBarLocator.allTextContents()
        expect(links).toEqual(['Frontends'])
    })
})