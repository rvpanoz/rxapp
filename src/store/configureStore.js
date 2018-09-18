import { createStore, compose, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "models/todos/reducers";
import rootEpic from "models/todos/epics";

const epicMiddleware = createEpicMiddleware();

export default function configureStore(state = rootReducer.initialState) {
  const store = createStore(
    rootReducer,
    state,
    compose(
      applyMiddleware(epicMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  epicMiddleware.run(rootEpic);
  return store;
}
