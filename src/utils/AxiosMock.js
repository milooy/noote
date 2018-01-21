import moment from "moment";

const content3 = `We want to implement single page application **which can manage notes**(in other words, memo).

## Spec
And for managing notes, We need notebook which can organize note.
Expected User behavior in organizing note will be like this.
[This is a github link](https://github.com/milooy/noote)`

/* Mocking axios HTTP request and returns json response */
let axiosMock = {
  noteBaseData: [
      { id: 3, title: "NOOTE Specification", date: "2018-01-18", notebookId: 1, notebookTitle: 'TODO' , contents: content3},
      { id: 2, title: "Second note", date: "2018-01-17", notebookId: 2, notebookTitle: 'DONE', contents: "efgh"},
      { id: 1, title: "First note", date: "2018-01-16", notebookId: 1, notebookTitle: 'TODO', contents: "abcd"}
  ],

  notebookBaseData: [
    { id: 1, title: "TODO", desc: "Keep this notes", noteIdList: [1, 3], color: "#F8BA00" },
    { id: 2, title: "DONE", desc: "I've done it", noteIdList: [2], color: "#F86422" }
  ],
  
  /* Returns Promise object that contains data */
  _promiseMaker: function(data) {
    return new Promise((resolve, reject) => {
      resolve({ data });
    });
  },

  /* Get array and returns sorted array(by title) */
  _sortByTitle: function(arr) {
    return arr.sort((a, b) => {
      const titleA = a.title.toUpperCase(), titleB = b.title.toUpperCase();
      if(titleA < titleB) {
      return -1;
      } else if(titleA > titleB) {
        return 1;
      }
      return 0;
    });
  },
  
  /* Get array and returns sorted array(by date) */
  _sortByDate: function(arr) {
    return arr.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  },

  /* Get array, query and returns filtered bookList that contains query in title, contents */
  _searchByTitleAndContents: function(arr, query) {
    return arr.filter(obj => {
      const text = obj.title + ' ' + obj.contents;
      return text.toUpperCase().search(query.toUpperCase()) >= 0 ;
    });
  },

  /* Deep copy of javascript object */
  _clone: function(obj) {
    if (obj === null || typeof(obj) !== 'object') {
      return obj;
    }
    let copy = obj.constructor();
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = this._clone(obj[attr]);
      }
    }
    return copy;
  },

  /* Mockup of GET method */
  get: function(url, option, modified) {
    /* NOTE LIST */
    if(url === '/api/note/') {
      /* Clone object because react doesn't render just modified (same) object. */
      return this._promiseMaker(this._clone(this.noteBaseData));
    }
    /* NOTEBOOK LIST */
    else if(url === '/api/notebook/') {
      return this._promiseMaker(this.notebookBaseData);
    }
    /* NOTEBOOK DETAIL DATA */
    else if(/\/api\/notebook\/\d\//.exec(url)) {
      const id = url.split('/')[3];
      const filteredNotebookBaseData = this.notebookBaseData.find(notebookData => {
        if(notebookData.id === Number(id)) {
          notebookData.noteList = this.noteBaseData.filter(noteData => {
            return notebookData.noteIdList.includes(noteData.id);
          });
          return true;
        } else { return false }
      });
      if(option && option.params) {
        /* Sort notes in notebook by title, date */
        if(option.params.sort === 'title') {
          filteredNotebookBaseData.noteList = this._sortByTitle(filteredNotebookBaseData.noteList);
        } else if(option.params.sort === 'date') {
          filteredNotebookBaseData.noteList = this._sortByDate(filteredNotebookBaseData.noteList);
        }
        /* Filter notebook by query */
        if(option.params.query) {
          filteredNotebookBaseData.noteList = this._searchByTitleAndContents(filteredNotebookBaseData.noteList, option.params.query);
        }
      }
      /* Clone object because react doesn't render just modified (same) object. */
      return this._promiseMaker(this._clone(filteredNotebookBaseData));
    }
    /* NOTE DETAIL DATA */
    else if(/\/api\/note\/\d+\//.exec(url)) {
      const id = url.split('/')[3], today = moment().format('YYYY-MM-DD');;
      const emptyObj = { id: id, title: "", date: today, notebookId: 1, notebookTitle: 'TODO', contents: ""}
      return this._promiseMaker(this.noteBaseData.filter(d => d.id === Number(id)).pop() || emptyObj)
    }
  },

  post: function(url, option) {
    /* SAVE NOTE BY ID */
    if(/\/api\/note\/\d\//.exec(url)) {
      let id = url.split('/')[3];
      return this._promiseMaker(`Note no.${id} successfully saved`);
    }
  },

  delete: function(url) {
    /* DELETE NOTE BY ID */
    let id = url.split('/')[3];
    this.noteBaseData = this.noteBaseData.filter(d => d.id !== Number(id));
    return this._promiseMaker(`Note no.${id} successfully deleted`);
  },

  put: function(url) {
    /* MOVE NOTE BY ID */
    return this._promiseMaker(`Note was successfully moved`);
  }
}

export default axiosMock;