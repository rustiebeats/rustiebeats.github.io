const { test } = require("node:test");
const assert = require("node:assert/strict");
const { dateFormat, head } = require("../src/_utils/filters");

test("dateFormat formats a date as Mon DD, YYYY", () => {
  assert.equal(dateFormat(new Date("2023-02-11")), "Feb 11, 2023");
});

test("dateFormat returns empty string for falsy input", () => {
  assert.equal(dateFormat(null), "");
  assert.equal(dateFormat(undefined), "");
});

test("head returns first n items", () => {
  assert.deepEqual(head([1, 2, 3, 4], 2), [1, 2]);
});

test("head returns last n items for negative n", () => {
  assert.deepEqual(head([1, 2, 3, 4], -2), [3, 4]);
});

test("head returns empty array for non-array input", () => {
  assert.deepEqual(head(null, 2), []);
  assert.deepEqual(head([], 2), []);
});
