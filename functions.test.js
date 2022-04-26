
const receive = require('./functions.more')

test('making some testing of code', () => {
    expect(receive.Pure(213213,32)).toBe(213245)
})