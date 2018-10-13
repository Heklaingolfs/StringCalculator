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

it("should return the sum for two numbers in the string", () => {
    expect(add("2,4")).toBe(6);
});

it("should return the sum for two numbers in the string", () => {
    expect(add("10,4")).toBe(14);
});

it("should return the sum for three numbers in the string", () => {
    expect(add("10,4,9")).toBe(23);
});

it("should handel newlines in string", () => {
    expect(add("10,4\n9")).toBe(23);
});

it("should not allow a single negative number", () => {
    try {
        add("-5");
        // Vill að testið faili hér
        expect(true).toBe(false);
    }
    catch(e) {
        expect(e.message).toBe("Negatives not allowed: -5");
    }
});

it("should not allow any negative number", () => {
    try {
        add("-5, 6");
        // Vill að testið faili hér
        expect(true).toBe(false);
    }
    catch(e) {
        expect(e.message).toBe("Negatives not allowed: -5");
    }
});

it("should not allow negative numbers", () => {
    expect(add("10,-4,5,-6")).toThrowError("Negatives not allowed: -4,-6");
});