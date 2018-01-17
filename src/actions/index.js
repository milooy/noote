export const FETCH_NOTELIST = "FETCH_NOTELIST";

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
        { id: 2, title: "Second note", contents: "efgh", date: "2018-01-17" },
        { id: 1, title: "First note", contents: "abcd", date: "2018-01-16" }
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
