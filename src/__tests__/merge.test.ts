import { merge } from "../merge";

// b is larger than a
test("merges [1, 3] + [2, 4, 5] to equal [1, 2, 3, 4, 5]", () => {
    expect(merge([1, 3], [2, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

// a is larger than b
test("merges [2, 4, 5] + [1, 3] to equal [1, 2, 3, 4, 5]", () => {
    expect(merge([2, 4, 5], [1, 3])).toEqual([1, 2, 3, 4, 5]);
});

// empty arrays
test("merges [] and [] to equal []", () => {
    expect(merge([], [])).toEqual([]);
});

// array with equal elements
test("merges [1] and [2] to equal [1, 2]", () => {
    expect(merge([1], [2])).toEqual([1, 2]);
});

// one array is empty
test("merges [1, 2, 3] and [] to equal [1, 2, 3]", () => {
    expect(merge([], [])).toEqual([]);
});


// arrays have duplicate elements
test("merges [1, 2, 3] and [2, 3, 4] to equal [1, 2, 3, 3, 4]", () => {
    expect(merge([], [])).toEqual([]);
});
