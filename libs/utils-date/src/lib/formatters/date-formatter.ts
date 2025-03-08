import { format, FormatOptions } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { DateFormatPreset, DateInput } from '../types';

const PRESET_FORMATS: Record<DateFormatPreset, string> = {
  iso: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
  'human-readable': 'MMMM do, yyyy - h:mm a',
  timestamp: 'yyyyMMddHHmmss',
};

/**
 * Formats a date using the specified format string or preset
 * @param date - Input date (Date object, timestamp, or ISO string)
 * @param format - Format string or preset name
 * @param options - Formatting options
 * @returns Formatted date string
 * @example Returns 'October 1st, 2023 - 12:00 PM'
 * formatDate(new Date('2023-10-01T12:00:00'), 'human-readable');
 */
function formatDate(
  date: DateInput,
  formatStr: string | DateFormatPreset = 'iso',
  options: FormatOptions = {}
): string {
  const parsedDate = date;
  const effectiveFormat =
    typeof formatStr === 'string' ? formatStr : PRESET_FORMATS[formatStr];

  if (options.timeZone) {
    const zonedDate = utcToZonedTime(parsedDate, options.timeZone);
    return format(zonedDate, effectiveFormat, options);
  }

  return format(parsedDate, effectiveFormat, options);
}

export { formatDate };
