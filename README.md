# code-coverage

```typescript
const compute = (a: number, b: number): number => {
  let result = 0;

  if (a >= 10) {
    result += a - 10;
  } else {
    result += a;
  }

  if (b >= 10) {
    result += b - 10 + Math.max(0, 10 - a);
  } else {
    result += b;
  }

  return result;
};

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
```
