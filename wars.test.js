
const wars = require('./wars')


test('test solve about issues', () => {
   expect(wars.Caught(['Hello','world','this','is','great'])).toBe('Hello','world','this','is','great')
})