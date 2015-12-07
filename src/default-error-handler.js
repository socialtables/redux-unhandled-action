export default function defaultErrorHandler(action) {
	console.error(`action with type ${action.type} did not modify the data in any reducer.` +
		`You may have mutated state directly or you may have a typo in your reducer`);
}