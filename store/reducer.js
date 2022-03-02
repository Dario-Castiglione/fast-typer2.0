const initState = {
  point: 0,

};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case 'changePoint':
      return {
        ...state,
        point: action.payload
      };
    default:
      return state;
  }
};

export { myReducer };
