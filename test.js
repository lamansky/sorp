'use strict'

const assert = require('assert')
const sorp = require('.')

const s = 'thing'
const p = 'things'

describe('sorp()', function () {
  it('should return the singular form for the number 1', function () {
    assert.strictEqual(sorp(1, s, p), s)
  })

  it('should return the plural form for other numbers', function () {
    assert.strictEqual(sorp(0, s, p), p)
    assert.strictEqual(sorp(2, s, p), p)
  })

  it('should support string numbers', function () {
    assert.strictEqual(sorp('1', s, p), s)
    assert.strictEqual(sorp('9', s, p), p)
  })
})
