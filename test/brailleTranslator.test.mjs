import {expect} from "chai";
import { it } from "mocha";

describe("'Translate braille binary' function tests: ", () => {
    let testString = "";

    it("translateBrailleBinary() function should be a function", () => {
        expect(translateBrailleBinary).to.be.a('function');
    });

    it("should correctly translate binary string containing lowercase letters", () => {
        expect(translateBrailleBinary("100100100000011110011100")).to.equal("cats");
    });

    it("should correctly translate binary string containing lowercase letters and symbols", () => {
        testString = "100100100000011110011100000000001110100010000000100100101001011110100010010000000000111010010100110001011110011001";
        expect(translateBrailleBinary(testString)).to.equal("cats are cute, right?");
    });

    it("should correctly translate binary string containing uppercase letters", () => {
        testString = "000001110010010100000000000001100000101110010110100000011010";
        expect(translateBrailleBinary(testString)).to.equal("Hi Anja!");
    });

    it("should correctly translate binary string containing integers", () => {
        testString = "000001010100000000110010100000111001100010000000001111100000000000100100100000011110010011";
        expect(translateBrailleBinary(testString)).to.equal("I have 1 cat.");
    });

    it("should correctly translate binary string containing decimals", () => {
        testString = "001111100000000101100010000000101010111010000000001111110000";
        expect(translateBrailleBinary(testString)).to.equal("1.5 or 2");
    });
});