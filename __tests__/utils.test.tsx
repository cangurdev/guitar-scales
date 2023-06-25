import { getScale } from '../src/utils';

test('should return scale', () => {
  const result = getScale({
    note : 'A',
    scale: 'minor'
  });
  
  expect(result).toEqual(["A", "B", "C", "D", "E", "F", "G", "A"]);
});
