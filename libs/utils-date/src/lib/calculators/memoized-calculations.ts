import { endOfDay, startOfDay } from 'date-fns';
import memoize from 'lodash.memoize';

const memoizedStartOfDay = memoize((date: Date) => startOfDay(date).getTime());

const memoizedEndOfDay = memoize((date: Date) => endOfDay(date).getTime());

export { memoizedEndOfDay, memoizedStartOfDay };
