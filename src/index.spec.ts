import compute from ".";

describe("Those 2 tests ensure a 100% code coverage.", () => {
  test("a < 10 and b < 10", () => {
    expect(compute(1, 1)).toEqual(2);
  });

  test("a >= 10 and b >= 10", () => {
    expect(compute(11, 11)).toEqual(2);
  });
});

describe.skip("Yet, there are corner cases and the code is not correctly covered!", () => {
  test("a < 10 and b >= 10", () => {
    expect(compute(1, 11)).toEqual(11);
  });
});
