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
- - -

Copyright (C) 2015 Social Tables, Inc. (https://www.socialtables.com) All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.