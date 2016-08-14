import defaultErrorHandler from "./default-error-handler";
import isPlainObject from "lodash.isplainobject";

export default function reduxUnhandledAction(callback = defaultErrorHandler) {
    return ({ getState }) => (next) => (action) => {
        if (isPlainObject(action) && typeof action.type !== "undefined") {
            const prevState = getState();
            const result = next(action);
            const nextState = getState();
            if (prevState === nextState) {
                callback(action);
            }
            return result;
        }
        return next(action);
    };
}
