export const FETCH_NOTELIST = "FETCH_NOTELIST";
export const FETCH_NOTEBOOKLIST = "FETCH_NOTEBOOKLIST";
export const FETCH_NOTEBOOKDETAIL = "FETCH_NOTEBOOKDETAIL";

// TODO: Detatch it later
let axiosMock = {
  /* Returns Promise object that contains data */
  _promiseMaker: function(data) {
    return new Promise((resolve, reject) => {
      resolve({ data });
    });
  },

  /* Mockup of GET method */
  get: function(url, option) {
    /* Returns note list */
    if(url === '/api/note/') {
      return this._promiseMaker([
        { id: 3, title: "Third note", contents: "flsj", date: "2018-01-18" },
        { id: 2, title: "Second note", contents: "efgh", date: "2018-01-17" },
        { id: 1, title: "First note", contents: "abcd", date: "2018-01-16" }
      ]);
    } else if(url === '/api/notebook/') {
      return this._promiseMaker([
        { id: 1, title: "TODO", desc: "Keep this notes", noteIdList: [1, 3], color: "#F8BA00" },
        { id: 2, title: "DONE", desc: "I've done it", noteIdList: [2], color: "#F86422" }
      ]);
    } else if(/\/api\/notebook\/\d\//.exec(url)) {
      let noteList = [], obj = {};
      if(url.endsWith('/1/')) {
        noteList = [
          { id: 3, title: "Third note", contents: "flsj", date: "2018-01-18" },
          { id: 1, title: "First note", contents: "abcd", date: "2018-01-16" }
        ];
        obj = { id: 1, title: "TODO", desc: "Keep this notes", noteList: noteList, color: "#F8BA00" }
      } else {
        noteList = [
          { id: 2, title: "Second note", contents: "efgh", date: "2018-01-17" }
        ]
        obj = { id: 2, title: "DONE", desc: "I've done it", noteList: noteList, color: "#F86422" }
      }
      return this._promiseMaker(obj)
    }
  }
}

export function fetchNoteList() {
  const request = axiosMock.get('/api/note/');
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

export function fetchNotebookDetail(id) {
  const request = axiosMock.get(`/api/notebook/${id}/`);
  return {
    type: FETCH_NOTEBOOKDETAIL,
    payload: request
  };
}
