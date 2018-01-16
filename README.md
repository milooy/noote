# noote
Notepad with react&redux
It is ZEPL's [challange](https://github.com/ZEPL/front-end-challenge/tree/master/notes-app). Yeah!

## Goals
We want to implement single page application which can manage notes(in other words, memo).

And for managing notes, We need notebook which can organize note.

Expected User behavior in organizing note will be like this

 - Create note in the "Todo" notebook
 - Move note in the "Todo" notebook to "Done" notebook
 - Delete note in the "Done" notebook
 - Sort notes in the "Todo" notebook via notebook title or update time


## Description
2. note has title, content and update time.
3. notebook has title, description and set of notes.
4. note should be included one of notebook.
5. In note page, you can read/update/remove note
5. In notebook page, you can manage notes - create, read, delete, move to other notebook, sort and filtering
6. In notebook page, you should not show note content fully, you should show little about content
6. Main page, you can see the notebooks and recent updated notes.

## Requirement
1. You should implement using React
2. all notes and notebooks should be able to access by url
3. all communication with backend side will be happened via REST api
    1. but you don’t need to implement, just make mock
    2. We will not provide API, you should make your own specification
4. You need to write test against component

## Good to have
1. Integration test
2. Rich notes content editor
3. Other features that can help user to using this app

## Essential technology stack
- React (+ jsx) for component based UI

Remarks:
+ jQuery or other library which can manipulate DOM is not recommended