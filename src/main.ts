class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new ValidationError("0で割ることは出来ません");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(error);
  }
} finally {
  console.log("計算終了");
}
