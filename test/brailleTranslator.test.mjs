import {expect} from "chai";
import { it } from "mocha";
import { translateBrailleBinary } from "../src/brailleTranslator.mjs";

describe("'Translate braille binary' function tests: ", () => {
    let testString = "";

    it("translateBrailleBinary() function should be a function", () => {
        expect(translateBrailleBinary).to.be.a('function');
    });

    it("should correctly translate the binaries for lowercase letters", () => {
        testString = "100100100000011110011100";
        expect(translateBrailleBinary(testString)).to.equal("cats");
    });

    it("should correctly translate the binaries for both lowercase letters and symbols", () => {
        testString = "100100100000011110011100000000111010010100110110110010011110011001";
        expect(translateBrailleBinary(testString)).to.equal("cats right?");
    });

    it("should correctly translate the binaries for uppercase letters", () => {
        testString = "000001110010010100000000000001100000101110010110100000011010";
        expect(translateBrailleBinary(testString)).to.equal("Hi Anja!");
    });

    it("should correctly translate the binaries for integers", () => {
        testString = "000001101100101111000000001111100000000000100100100000011110010011";
        expect(translateBrailleBinary(testString)).to.equal("My 1 cat.");
    });

    it("should correctly translate the binaries for decimals", () => {
        testString = "001111100000000101100010000000101010111010000000001111110000";
        expect(translateBrailleBinary(testString)).to.equal("1.5 or 2");
    });

    it("should correctly handle string only containing the binary for space", () => {
        testString = "000000";
        expect(translateBrailleBinary(testString)).to.equal(" ");
    });

    it("should handle string containing space between the binaries", () => {
        testString = "000001 110010 010100 000000 000001 100000 101110 010110 100000 011010";
        expect(translateBrailleBinary(testString)).to.equal("Hi Anja!");
    });
});