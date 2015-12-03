# Redux Unhandled Action

[![Circle CI](https://circleci.com/gh/socialtables/redux-unhandled-action.svg?style=svg&circle-token=ae2d4f2317f68ae5c23cf2ad21eb8d0b07824098)](https://circleci.com/gh/socialtables/redux-unhandled-action)

A simple redux middleware that will log an error to the console if the state returned from a dispatch is equal to the state before the dispatch.

### Install
`npm install redux-unhandled-action --save`

### Use
```js
import {createStore, applyMiddleware } from "redux";
import reduxUnhandledAction from "redux-unhandled-action";
import reducer from "./reducer";
const store = applyMiddleware(reduxUnhandledAction)(createStore);
```
