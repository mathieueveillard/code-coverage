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

export default compute;
