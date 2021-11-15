
const think = require('./think')


test('seeing this code is certin!!', () => {
    expect(think.increased(30)).toBe('50')
})

