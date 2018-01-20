# noote
Notepad with react&redux
It is ZEPL's [challange](https://github.com/ZEPL/front-end-challenge/tree/master/notes-app). Yeah!

## How to run
It also deployed at [Noote](https://nootebook-zepl.firebaseapp.com/) with Firebase.
```
$ npm install
$ npm start
```

## Issues
Issues are in the [github issue page](https://github.com/milooy/noote/issues/)

## Dependencies
- UI library: ant design
- HTTP Client: axios-like custom mocking promise
- CSS Preprocessor: LESS
- WYSIWIG Editor: SimpleMDE
- Hosting: Firebase
- Other react related library: Redux, redux-promise

---

## Goals
We want to implement single page application which can manage notes(in other words, memo).

And for managing notes, We need notebook which can organize note.

Expected User behavior in organizing note will be like this

 - [ ] Create note in the "Todo" notebook
 - [x] Move note in the "Todo" notebook to "Done" notebook
 - [x] Delete note in the "Done" notebook
 - [x] Sort notes in the "Todo" notebook via notebook title or update time


## Description
- [x] note has title, content and update time.
- [x] notebook has title, description and set of notes.
- [ ] note should be included one of notebook.
- [x] In note page, you can read/update/remove note
- [ ] In notebook page, you can manage notes - create, read, delete, move to other notebook, sort and filtering
- [x] In notebook page, you should not show note content fully, you should show little about content
- [x] Main page, you can see the notebooks and recent updated notes.

## Requirement
- [ ] You should implement using React
- [x] all notes and notebooks should be able to access by url
- [x] all communication with backend side will be happened via REST api
    - [x] but you don’t need to implement, just make mock
    - [ ] We will not provide API, you should make your own specification
- [ ] You need to write test against component

## Good to have
- [ ] Integration test
- [x] Rich notes content editor
- [x] Other features that can help user to using this app

## Essential technology stack
- React (+ jsx) for component based UI

Remarks:
+ jQuery or other library which can manipulate DOM is not recommended