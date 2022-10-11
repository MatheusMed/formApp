
import React, { createContext, useReducer } from 'react';
import { ReducerActionType } from '../../types/reducerActionType';
import { UserType, userInitialState, userReducer } from '../reducers/userReducer';

type initialStateType = {
  user: UserType
}

type ContextType = {
  state: initialStateType,
  dispatch: React.Dispatch<any>

}

type PropsProvider = {
  children: React.ReactNode
}

const initialState = {
  user: userInitialState,
}


export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ user }: initialStateType, action: ReducerActionType) => ({
  user: userReducer(user, action),
});


export const ContextProvider = ({ children }: PropsProvider) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }} >
      {children}
    </Context.Provider>
  );
}

