import { useAppDispatch } from '@/shared/lib/store';
import { SelectionToolbar } from '@/shared/ui/components/selection-toolbar';
import { useCallback } from 'react';
import { useDatePeriod } from '../../model/selectors';
import { currencyRateActions } from '../../model/slice';
import { CurrencyDatePeriod } from '../../model/types';
import { periodOptions } from './constants';

export const PeriodSelectionToolbar = () => {
  const dispatch = useAppDispatch();

  const datePeriod = useDatePeriod();

  const valueChanged = useCallback(
    (value: CurrencyDatePeriod) =>
      dispatch(currencyRateActions.setDatePeriod(value)),
    [dispatch],
  );

  return (
    <SelectionToolbar<CurrencyDatePeriod>
      options={periodOptions}
      value={datePeriod}
      onChangeValue={valueChanged}
    />
  );
};
