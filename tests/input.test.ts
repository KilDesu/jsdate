import { describe, it, expect } from 'bun:test';
import Jikan from '../src';
import { datesInputsForTests } from '.';

describe('Jikan initialisation', () => {
    for (const date of datesInputsForTests) {
        let testName: keyof (typeof date)['inputs'];

        for (testName in date.inputs) {
            it(testName, () => {
                const input = date.inputs[testName];

                const jikan =
                    input && typeof input === 'object' && 'dateKey' in input
                        ? new Jikan(input, 'dateKey')
                        : new Jikan(input);

                expect(jikan.isValid).toBe(date.expectedValidity);
                expect(jikan.string).toBe(date.expectedResultString);
            });
        }
    }
});
