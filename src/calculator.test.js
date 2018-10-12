const add = require("./calculator");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return 1 if the string have only the number 1", () => {
    expect(add("1")).toBe(1);
});

it("should return 12 if the stirng have only the number 12", () => {
    expect(add("12")).toBe(12);
});