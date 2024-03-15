export const initialState = {
  number: 0,
  maxValue: 10,
  minValue: 0,
};

type ActionType = IncrementCountType | ResetCountType | ChangeValueMaxType | ChangeValueMinType;

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
      return { ...state, maxValue: action.value };
    }
    case 'CHANGE-VALUE-MIN': {
      return { ...state, minValue: action.value };
    }
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
    value: value,
  } as const;
};
type ChangeValueMinType = ReturnType<typeof changeValueMin>;
export const changeValueMin = (value: number) => {
  return {
    type: 'CHANGE-VALUE-MIN',
    value: value,
  } as const;
};
