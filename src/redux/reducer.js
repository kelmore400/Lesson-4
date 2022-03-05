const initialState = 1;

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default: 
    return state;
  }
};