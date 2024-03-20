// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests written by PS", () => {
    it("should return false if the alphabet isn't exactly 26 characters", () => {
        const input = "input";
        const alphabet = "abcdef";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should return false if each character in the alphabet isn't unique", () => {
        const input = "input";
        const alphabet = "abcabcabcabcabcabcabcabcyz";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should return a string transformed by the alphabet when encoding", () => {
        const input = "message";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet);
        const expected = "y&ii$r&";
        expect(actual).to.be.equal(expected);
    });
    it("should return a string translated by the alphabet when decoding", () => {
        const input = "y&ii$r&";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, false);
        const expected = "message";
        expect(actual).to.be.equal(expected);
    });
    it("should maintain spaces in the message when encoding", () => {
        const input = "you are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet);
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.be.equal(expected);
    });
    it("should maintain spaces in the message when decoding", () => {
        const input = "elp xhm xf mbymwwmfj dne";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet, false);
        const expected = "you are an excellent spy";
        expect(actual).to.be.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input1 = "A MESSAGE";
        const input2 = "a message";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual1 = substitution(input1, alphabet);
        const actual2 = substitution(input2, alphabet);
        expect(actual1).to.be.equal(actual2);
    });
});