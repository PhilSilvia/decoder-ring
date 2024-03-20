// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests written by PS", () => {
    it("should return false if the number of characters isn't even when decoding", () => {
        const input = "1234123 123"
        const actual = polybius(input, false);
        expect(actual).to.be.false;
    });
    it("should return a string of numbers representing the string when encoding", () => {
        const input = "message";
        const expected = "23513434112251";
        const actual = polybius(input);
        expect(actual).to.be.equal(expected);
    });
    it("should return a string of characters represented by the numbers when decoding", () => {
        const input = "23513434112251";
        const expected = "message";
        const actual = polybius(input, false);
        expect(actual).to.be.equal(expected);
    });
    it("should translate both i and j into 42", () => {
        const input = "iijj";
        const expected = "42424242";
        const actual = polybius(input);
        expect(actual).to.be.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input1 = "Testing";
        const input2 = "testing";
        const actual1 = polybius(input1);
        const actual2 = polybius(input2);
        expect(actual1).to.be.equal(actual2);
    });
    it("should maintain spaces in the message when encoding", () => {
        const input = "Hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.be.equal(expected);
    });
    it("should maintain spaces in the message when decoding", () => {
        const input = "3251131343 2543241341";
        const expected = "hello world";
        const actual = polybius(input, false);
        expect(actual).to.be.equal(expected);
    });
});