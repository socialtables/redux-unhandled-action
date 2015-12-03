var test = require("tape");
var sinon = require("sinon");
var unhandledAction = require("../dist").default;
var state = 0;

function next(action) {
	state += 1;
	return action;
}

function nextSameState(action) {
	return action;
}

var spy = sinon.spy(next);

function getState() {
	return state;
}

test("returns a function", function(assert) {
	assert.ok(typeof unhandledAction() === "function", "middleware returns a function");
	assert.end();
});

test("should call next and pass action", function(assert) {
	var action = {
		type: "COOL_ACTION"
	};
	var actionHandler = unhandledAction()({getState: getState})(spy)(action);
	assert.ok(spy.calledWith(action), "next called with action");
	assert.end();
});

test("should error to console when state is not changed", function(assert) {
	var action = {
		type: "COOL_ACTION"
	};
	var consoleError = sinon.stub(console, "error");
	var actionHandler = unhandledAction()({getState: getState})(nextSameState)(action);
	assert.ok(consoleError.called, "console error is logged when state is not altered");
	consoleError.restore();
	assert.end();
});

test("should not error when state is properly updated", function(assert) {
	var action = {
		type: "COOL_ACTION"
	};
	var consoleError = sinon.stub(console, "error");
	var actionHandler = unhandledAction()({getState: getState})(next)(action);
	assert.notOk(consoleError.called, "console error is not logged when state is not altered");
	assert.end();
});
