import { add, subtract } from "./sum";

describe("sum", () => {
  describe("add", () => {
    test('should add numbers together', () => {
      expect(add(1, 2)).toBe(3)
    })
  });

  describe("subtract", () => {});
});
