type DateInput = Date | string | number;

type DateFormatPreset = 'iso' | 'human-readable' | 'timestamp';

declare module 'date-fns' {
  interface FormatOptions {
    preset?: DateFormatPreset;
    timeZone?: string;
  }
}

export { DateFormatPreset, DateInput };
