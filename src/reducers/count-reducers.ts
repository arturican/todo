const initialState = {
  number: 0,
  maxValue: 0,
  minValue: 0,
};

type StateType = {
  number: number;
  maxValue: number;
  minValue: number;
};

export const countReducer = (state: StateType = initialState): StateType => {
  return state;
};
