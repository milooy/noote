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
        { title: "First note", contents: "abcd" },
        { title: "Second note", contents: "efgh" }
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
