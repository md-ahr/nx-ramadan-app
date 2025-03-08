import { describe, expect, it } from '@jest/globals';
import { formatDate } from './date-formatter';

describe('formatDate', () => {
  it('handles ISO preset format with timezone', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = formatDate(date, 'iso', { timeZone: 'America/New_York' });
    expect(result).toBe('2023-10-01T08:00:00.000-04:00');
  });

  it('throws informative error for invalid input', () => {
    expect(() => formatDate('invalid-date')).toThrow(
      '[utils-date] Invalid date input: invalid-date'
    );
  });
});
