import type { Option } from '@/shared/ui/components/selection-toolbar';
import { CurrencyDatePeriod } from '../../model/types';

export const periodOptions: Option<CurrencyDatePeriod>[] = [
  { label: '1W', value: CurrencyDatePeriod.oneWeek },
  { label: '2W', value: CurrencyDatePeriod.twoWeeks },
  { label: '1M', value: CurrencyDatePeriod.oneMonth },
  { label: '3M', value: CurrencyDatePeriod.threeMonths },
  { label: '6M', value: CurrencyDatePeriod.sixMonths },
  { label: '1Y', value: CurrencyDatePeriod.oneYear },
  { label: '2Y', value: CurrencyDatePeriod.twoYear },
  { label: '4Y', value: CurrencyDatePeriod.fourYear },
];
