import axiosMock from "../utils/AxiosMock";

export const FETCH_NOTELIST = "FETCH_NOTELIST";
export const FETCH_NOTEBOOKLIST = "FETCH_NOTEBOOKLIST";
export const FETCH_NOTEBOOKDETAIL = "FETCH_NOTEBOOKDETAIL";
export const FETCH_NOTEDETAIL = "FETCH_NOTEDETAIL";
export const POST_NOTE = "POST_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const MOVE_NOTE = "MOVE_NOTE";

export function fetchNoteList(option) {
  const request = axiosMock.get('/api/note/', option);
  return {
    type: FETCH_NOTELIST,
    payload: request
  };
}

export function fetchNotebookList() {
  const request = axiosMock.get('/api/notebook/');
  return {
    type: FETCH_NOTEBOOKLIST,
    payload: request
  };
}

export function fetchNotebookDetail(id, option) {
  const request = axiosMock.get(`/api/notebook/${id}/`, option);
  return {
    type: FETCH_NOTEBOOKDETAIL,
    payload: request
  };
}

export function fetchNoteDetail(id) {
  const request = axiosMock.get(`/api/note/${id}/`);
  return {
    type: FETCH_NOTEDETAIL,
    payload: request
  };
}

export function postNote(id, formData) {
  /* Backend Logic: If note id exists in database, then update note. If not, then create new note. */
  const csrftoken = 'abc123';
  const request = axiosMock.post(`/api/note/${id}/`, {
    data: formData,
    headers: {
      'X-CSRFToken': csrftoken
    }
  });
  return {
    type: POST_NOTE,
    payload: request
  };
}

export function deleteNote(id) {
  const csrftoken = 'abc123';
  const request = axiosMock.delete(`/api/note/${id}/`, {
    headers: {
      'X-CSRFToken': csrftoken
    }
  });
  return {
    type: DELETE_NOTE,
    payload: request
  };
}

export function moveNote(id) {
  const csrftoken = 'abc123';
  const request = axiosMock.put(`/api/note/${id}/`, {
    headers: {
      'X-CSRFToken': csrftoken
    }
  });
  return {
    type: MOVE_NOTE,
    payload: request
  };
}
