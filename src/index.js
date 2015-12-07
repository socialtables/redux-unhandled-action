import defaultErrorHandler from "./default-error-handler";

export default function reduxUnhandledAction(callback = defaultErrorHandler) {
	return ({getState}) => (next) => (action) => {
		const prevState = getState();
		const result = next(action);
		const nextState = getState();
		if (prevState === nextState) {
			callback(action);
		}
		return result;
	};

}
