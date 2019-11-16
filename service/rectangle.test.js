import { Rectangle } from './rectangle.js';

test('finds area of rectangle', () => {
  const rect = new Rectangle(2, 3);

  expect(rect.area).toBe(6);
});
