export default function sameStateWarning() {
	return ({getState}) => (next) => (action) => {
		const prevState = getState();
		const result = next(action);
		const nextState = getState();
		if (prevState === nextState) {
			console.error(`action with type ${action.type} did not modify the data in any reducer.` +
				`You may have mutated state directly or you may have a typo in your reducer`);
		}
		return result;
	};

}
