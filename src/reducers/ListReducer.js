import {
  FETCH_NOTELIST
} from '../actions/index';

const initialState = {
  noteList: [],
};

export default function (state = initialState, action) {
  switch ( action.type ) {
    case FETCH_NOTELIST:
      return { ...state, noteList: action.payload.data };
    default:
      return state;
  }
}
