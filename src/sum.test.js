import * as sum from "./sum";

describe("sum", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("spying on and mocking implementation of module", () => {
    // mock the implementation to be deterministic
    jest.spyOn(sum, "add").mockImplementation((num1, num2) => num2);
    expect(sum.add(2, 2)).toBe(2);
  });

  test("spying on and mocking implementation ONCE", () => {
    jest.spyOn(sum, "add").mockImplementationOnce((num1, num2) => num2);
    // this first call uses the mock above
    expect(sum.add(2, 2)).toBe(2);
    // this second call uses the actual code
    expect(sum.add(2, 2)).toBe(4);
  });
});
