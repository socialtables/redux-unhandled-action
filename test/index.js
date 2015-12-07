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

test("should error to console when new state is not returned when default callback is used", function(assert) {
	var action = {
		type: "COOL_ACTION"
	};
	var consoleError = sinon.stub(console, "error");
	var actionHandler = unhandledAction()({getState: getState})(nextSameState)(action);
	assert.ok(consoleError.called, "console error is logged when new state is is not provided");
	consoleError.restore();
	assert.end();
});

test("should call passed in callback on error", function(assert) {
	var action = {
		type: "COOL_ACTION"
	};
	var stub = sinon.stub();
	var actionHandler = unhandledAction(stub)({getState: getState})(nextSameState)(action);
	assert.ok(stub.called, "pased in callback called");
	assert.end();
});

test("should not error when state is properly updated", function(assert) {
	var action = {
		type: "COOL_ACTION"
	};
	var consoleError = sinon.stub(console, "error");
	var actionHandler = unhandledAction()({getState: getState})(next)(action);
	assert.notOk(consoleError.called, "console error is not logged when a new state is returned");
	assert.end();
});
