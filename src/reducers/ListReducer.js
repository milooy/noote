import {
  FETCH_NOTELIST, FETCH_NOTEBOOKLIST, FETCH_NOTEBOOKDETAIL
} from '../actions/index';

const initialState = {
  noteList: [],
  notebookList: [],
  notebookDetail: null,
};

export default function (state = initialState, action) {
  switch ( action.type ) {
    case FETCH_NOTELIST:
      return { ...state, noteList: action.payload.data };
    case FETCH_NOTEBOOKLIST:
      return { ...state, notebookList: action.payload.data };
    case FETCH_NOTEBOOKDETAIL:
      return { ...state, notebookDetail: action.payload.data };
    default:
      return state;
  }
}
