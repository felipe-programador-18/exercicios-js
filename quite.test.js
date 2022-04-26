
const receive = require('./quite.more')

test('test more an once', () => {
    expect(receive.multiple(100,332)).toBe(33200)
})

test('seeing this result of more three and more four', () =>{
    expect(receive.More(500,40)).toBe(540)
})
