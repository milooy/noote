export const FETCH_NOTELIST = "FETCH_NOTELIST";
export const FETCH_NOTEBOOKLIST = "FETCH_NOTEBOOKLIST";

let axiosMock = {
  /* Returns Promise object that contains data */
  _promiseMaker: function(data) {
    return new Promise((resolve, reject) => {
      resolve({ data });
    });
  },

  /* Mockup of GET method */
  get: function(url) {
    /* Returns note list */
    if(url === '/api/note/') {
      return this._promiseMaker([
        { id: 3, title: "Third note", contents: "flsj", date: "2018-01-18" },
        { id: 2, title: "Second note", contents: "efgh", date: "2018-01-17" },
        { id: 1, title: "First note", contents: "abcd", date: "2018-01-16" }
      ]);
    } else if(url === '/api/notebook/') {
      return this._promiseMaker([
        { id: 2, title: "DONE", desc: "Erase it from ur head", noteIdList: [2], color: "#F86422" },
        { id: 1, title: "TODO", desc: "Keep this notes", noteIdList: [1, 3], color: "#F8BA00" }
      ]);
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
