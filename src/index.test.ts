import { sum, multiply } from "./sum";

jest.mock("./sum", () => ({
  ...jest.requireActual<object>("./sum"),
  sum: () => 3,
}));

const mockFn = jest.fn();

describe("Sample", () => {
  beforeEach(() => {
    // jest.resetAllMocks();
  });

  it("should work as expected", () => {
    expect(sum(1, 2)).toBe(3);

    expect(multiply(2, 3)).toBe(6);
  });

  it("should work first", () => {
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should work second", () => {
    mockFn.mockReset();
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
