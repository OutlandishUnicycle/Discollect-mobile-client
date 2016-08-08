import { combineReducers } from 'redux';

const temp = (state = 'hi', action) => {
  switch(action.type) {
    case 'INIT': {
      return state;
    }
    default:
      return state;
  };
};

const items = (state = [], action) => {
  switch (action.type) {
    case 'GET_INITIAL_ITEMS':
      return action.items;
    default:
      return state;
  }
};


const reducer = combineReducers({
  temp,
  items,
});

export default reducer;
