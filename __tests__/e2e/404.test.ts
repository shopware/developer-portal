describe('render correct content', async () => {
    beforeAll(async () => {
        await goto('/four-oh-four.html')
    })

    test('navigation', async() => {
        const headingsLocator = page.locator('h1');
        const headings = await headingsLocator.allTextContents()
        expect(headings).toEqual(['PAGE NOT FOUND'])
    })
})