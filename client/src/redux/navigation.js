import { Map } from 'immutable';

const SET_TITLE = '@navigation/SET_TITLE';

const defaultState = Map({
  'title': 'Undefined'
});

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return state.mergeIn(['title'], action.payload);
    
    default:
      return state || defaultState;
  }
};

export const setTitle = (title) => {
  title = title.toUpperCase();
  return { type: SET_TITLE, payload: title };
};

export default reducer;
