const testing = [1, 2, 3, 4, 5, 6, 7, 8, 98, 100,1000]
const TestingMore = testing.sort((u,v) => (u-v)).splice(-2)

console.log(TestingMore)