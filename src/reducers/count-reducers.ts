const initialState = {
  number: 0,
  maxValue: 0,
  minValue: 0,
};

type ActionType = IncrementCountType | ResetCountType;

type StateType = {
  number: number;
  maxValue: number;
  minValue: number;
};

export const countReducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, minValue: state.minValue + 1 };
    case 'RESET': {
      return { ...state, minValue: state.minValue };
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
