export default {
    paths() {
        return [
            {
                params: {slug: 'store'},
                content: 'This is content',
            },
            {
                params: {slug: 'admin'},
                content: 'This is custom content',
            }
        ]
    }
}