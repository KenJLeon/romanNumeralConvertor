import { converter } from "./converterv1.js";
import allRomanNumerals from "../allRomanNumerals.json";

test('romanNumeralConverter', () => {
    for (let i = 0; i < allRomanNumerals.length; i++) {
        const expected = allRomanNumerals[i];
        const actual = converter(i + 1);
        expect(actual).toEqual(expected);
    }
});