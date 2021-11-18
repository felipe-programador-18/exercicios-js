
const receive = require('./quite.more')


test('test more an once', () => {
    expect(receive.multiple(100,332)).toBe(33200)
})