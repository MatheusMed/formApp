import { ReducerActionType } from "../../types/reducerActionType";

export type UserType = {
  name: string;
  lastName: string;
  age: number;
}

export const userInitialState: UserType = {
  name: '',
  lastName: '',
  age: 0
}


export const actions = {
  CHANGE_NAME: 'CHANGE_NAME',
  CHANGE_LASTNAME: 'CHANGE_LASTNAME',
  CHANGE_AGE: 'CHANGE_AGE'
}

export const userReducer = (state: UserType, action: ReducerActionType) => {

  switch (action.type) {
    case actions.CHANGE_NAME:
      return { ...state, name: action.payload.name }

    case actions.CHANGE_LASTNAME:
      return { ...state, lastName: action.payload.lastName }

    case actions.CHANGE_AGE:
      return { ...state, age: action.payload.age }

  }

  return state;

}