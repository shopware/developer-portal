export default {
    paths() {
        return [
            {
                params: {api: 'store'},
                content: 'This is content',
            },
            {
                params: {api: 'admin'},
                content: 'This is custom content',
            }
        ]
    }
}