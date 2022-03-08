const trade = require('./mpa')

test('testing function sum', () => {
    expect(trade.Soma(32,32)).toBe(64)
} )

test('trade function that caught daete', () => {
    expect(trade.Soma(10,32)).toBe(42)
})