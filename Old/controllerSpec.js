// File: chapter3/controllerSpec.js
describe('Controller: MainCtrl', function() {
  // Instantiate a new version of my module before each test
  beforeEach(module('notesApp'));

  var ctrl;

  // Before each unit test, instantiate a new instance
  // of the controller
  beforeEach(inject(function($controller) {
    ctrl = $controller('MainCtrl');
  }));

  it('should have items available on load', function() {
    expect(ctrl.notes).toEqual([
		{id: 1, label: 'First Note', done: false},
        {id: 2, label: 'Second Note', done: false},
        {id: 3, label: 'Finished Third Note', done: true}
    ]);
  });

  it('should have highlight items based on state - adam1', function() {
    var note = {id: 1, label: 'First Note', done: true};

    var actualClass = ctrl.getDoneClass(note);
    expect(actualClass.finished).toBeTruthy();
    expect(actualClass.unfinished).toBeFalsy();

    note.done = false;
    actualClass = ctrl.getDoneClass(note);
    expect(actualClass.finished).toBeFalsy();
    expect(actualClass.unfinished).toBeTruthy();
  });
  
  it('should have highlight items based on state - adam2', function() {
    var note = {id: 1, label: 'First Note', done: true};

    var actualClass = ctrl.getDoneClass(note);
    expect(actualClass.finished).toBeTruthy();
    expect(actualClass.unfinished).toBeFalsy();

    note.done = false;
    actualClass = ctrl.getDoneClass(note);
    expect(actualClass.finished).toBeFalsy();
    expect(actualClass.unfinished).toBeTruthy();
  });

});