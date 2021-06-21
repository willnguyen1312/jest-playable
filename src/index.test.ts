import { sum, multiply } from "./sum";

jest.mock("./sum", () => ({
  ...jest.requireActual<object>("./sum"),
  sum: () => 3,
}));

it("should work as expected", () => {
  expect(sum(1, 2)).toBe(3);

  expect(multiply(2, 3)).toBe(6);
});
