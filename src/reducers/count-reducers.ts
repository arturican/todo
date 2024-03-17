export const initialState = {
  number: 0,
  maxValue: 0,
  minValue: 0,
};

type ActionType =
  | IncrementCountType
  | ResetCountType
  | ChangeValueMaxType
  | ChangeValueMinType
  | SetMaxValueType
  | SetMinValueType
  | SetNumberType;

export type StateType = {
  number: number;
  maxValue: number;
  minValue: number;
};

export const countReducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, number: state.number + 1 };
    case 'RESET': {
      return { ...state, number: state.minValue };
    }
    case 'CHANGE-VALUE-MAX': {
      return { ...state, maxValue: action.payload };
    }
    case 'CHANGE-VALUE-MIN': {
      return { ...state, minValue: action.payload };
    }
    case 'SET-MAX-VALUE':
      return { ...state, maxValue: action.payload };
    case 'SET-MIN-VALUE':
      return { ...state, minValue: action.payload };
    case 'SET-NUMBER':
      return { ...state, number: action.payload };
    default: {
      return state;
    }
  }
};

type IncrementCountType = ReturnType<typeof incrementCount>;
export const incrementCount = () => {
  return {
    type: 'INCREMENT',
  } as const;
};
type ResetCountType = ReturnType<typeof resetCount>;
export const resetCount = () => {
  return {
    type: 'RESET',
  } as const;
};
type ChangeValueMaxType = ReturnType<typeof changeValueMax>;
export const changeValueMax = (value: number) => {
  return {
    type: 'CHANGE-VALUE-MAX',
    payload: value,
  } as const;
};
type ChangeValueMinType = ReturnType<typeof changeValueMin>;
export const changeValueMin = (value: number) => {
  return {
    type: 'CHANGE-VALUE-MIN',
    payload: value,
  } as const;
};

type SetMaxValueType = ReturnType<typeof setMaxValue>;
export const setMaxValue = (value: number) => {
  return {
    type: 'SET-MAX-VALUE',
    payload: value,
  } as const;
};
type SetMinValueType = ReturnType<typeof setMinValue>;
export const setMinValue = (value: number) => {
  return {
    type: 'SET-MIN-VALUE',
    payload: value,
  } as const;
};

type SetNumberType = ReturnType<typeof setNumber>;
export const setNumber = (value: number) => {
  return {
    type: 'SET-NUMBER',
    payload: value,
  } as const;
};
