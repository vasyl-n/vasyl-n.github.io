const s = require('./sum.js');
const ttt = require('./tictactoe.js')
test('adds 1 + 2 to equal 3', () => {
  expect(s.sum(4, 5)).toBe(9);
});
test('mul 1 * 2 to equal ', () => {
  expect(s.mul(1, 2)).toBe(2);
});

test('marker changing test', () => {
  expect(ttt.user_marker("X")).toBe("O");
});
score_x = 0
score_o = 0
test('invalid score input count test', () => {
  ttt.score_count("R")
  expect(score_x).toEqual(0)
})
test('score X count test', () => {
  ttt.score_count("X")
  ttt.score_count("X")
  expect(window.score_x).toEqual(2)
})

test('score O count test', () => {
  ttt.score_count("O")
  expect(window.score_o).toEqual(1)
})
