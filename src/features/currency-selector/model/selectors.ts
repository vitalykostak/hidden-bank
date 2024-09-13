import { buildSelector } from '@/shared/lib/store';

export const [useCurrencyValue] = buildSelector(state => state.currency.value);
