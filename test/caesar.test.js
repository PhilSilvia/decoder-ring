// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests written by PS", () => {
    it("should return false if the shift is less than -25", () => {
        const actual = caesar("input", -111);
        expect(actual).to.be.false;
    });
    it("should return false if the shift is 0", () => {
        const actual = caesar("input", 0);
        expect(actual).to.be.false;
    });
    it("should return false if the shift is greater than 25", () => {
        const actual = caesar("input", 111);
        expect(actual).to.be.false;
    });
    it("should return a string of characters offset by the given shift when encoding", () => {
        const input = "testing";
        const actual = caesar(input, 1);
        const expected = "uftujoh";
        expect(actual).to.be.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input1 = "testing";
        const input2 = "Testing";
        const actual1 = caesar(input1, 1);
        const actual2 = caesar(input2, 1);
        expect(actual1).to.be.equal(actual2);
    });
    it("should wrap around when the shift takes a letter past the end of the alphabet", () => {
        const input = "testing";
        const expected = "docdsxq"
        const actual = caesar(input, 10);
        expect(actual).to.be.equal(expected);
    });
    it ("should keep spaces and special characters untouched", () => {
        const input = "This is a secret message!";
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar(input, 8, true);
        expect(actual).to.be.equal(expected);
    });
    it("should return a string of character decoded by the given shift when decoding", () => {
        const input = "BPQA qa I amkzmb umaaiom!";
        const actual = caesar(input, 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.be.equal(expected);
    });
});