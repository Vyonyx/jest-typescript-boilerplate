import {describe, expect, test} from '@jest/globals';
const {sum, sub} = require('./index')

test('test sum', () => {
  expect(sum(1, 1)).toBe(2)
})

test('test sub', () => {
  expect(sub(5, 4)).toBe(1)
})