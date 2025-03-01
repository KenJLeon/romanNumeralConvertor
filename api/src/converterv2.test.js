import { romanNumeralConverter } from "./converterv2.js";
import allRomanNumerals from "../allRomanNumerals.json";

test('romanNumeralConverter', () => {
    for (let i = 0; i < allRomanNumerals.length; i++) {
        const expected = allRomanNumerals[i];
        const actual = romanNumeralConverter(i + 1);
        expect(actual).toEqual(expected);
    }
});