import { formatAmount, parseAmount } from '../formatAmount';

describe('Utility Functions', () => {
  describe('formatAmount', () => {
    it('Formats a number with commas', () => {
      expect(formatAmount(1000)).toBe('1,000');
      expect(formatAmount(1000000)).toBe('1,000,000');
      expect(formatAmount(123456789)).toBe('123,456,789');
      expect(formatAmount(0)).toBe('0');
    });

    it('handles numbers less than 1000 without adding commas', () => {
      expect(formatAmount(999)).toBe('999');
      expect(formatAmount(100)).toBe('100');
      expect(formatAmount(10)).toBe('10');
    });
  });

  describe('Parses Amount', () => {
    it('parses a string with commas into a number', () => {
      expect(parseAmount('1,000')).toBe(1000);
      expect(parseAmount('1,000,000')).toBe(1000000);
      expect(parseAmount('123,456,789')).toBe(123456789);
    });

    it('parses a string without commas into a number', () => {
      expect(parseAmount('1000')).toBe(1000);
      expect(parseAmount('1000000')).toBe(1000000);
      expect(parseAmount('123456789')).toBe(123456789);
    });

    it('Returns NaN for invalid strings', () => {
      expect(parseAmount('abc')).toBeNaN();
      expect(parseAmount('')).toBeNaN();
      expect(parseAmount('123abc')).toBe(123);
    });
  });
});
