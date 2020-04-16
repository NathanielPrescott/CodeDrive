import { square, cube } from './math.js';

test('finds square of 3', () => {
    const sq = square(3);

    expect(sq).toBe(9);
});

test('finds cube of 3', () => {
    const cu = cube(3);

    expect(cu).toBe(27);
});