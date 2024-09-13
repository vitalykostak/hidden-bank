import {FC, PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {createStore} from '../config/create-store';

export const StoreProvider: FC<PropsWithChildren> = props => {
  const {children} = props;

  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};
