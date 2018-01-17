import {
  FETCH_NOTELIST, FETCH_NOTEBOOKLIST
} from '../actions/index';

const initialState = {
  noteList: [],
  notebookList: [],
};

export default function (state = initialState, action) {
  switch ( action.type ) {
    case FETCH_NOTELIST:
      return { ...state, noteList: action.payload.data };
    case FETCH_NOTEBOOKLIST:
      return { ...state, notebookList: action.payload.data };
    default:
      return state;
  }
}
