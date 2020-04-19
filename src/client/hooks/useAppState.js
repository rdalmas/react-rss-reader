import { useContext } from 'react';

import { AppContext } from '../providers/app.provider';

const useAppState = () => {
  const { setAppState, ...state } = useContext(AppContext);

  return [state, setAppState];
};


export default useAppState;
