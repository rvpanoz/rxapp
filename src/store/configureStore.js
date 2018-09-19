import { createStore, compose, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "models/reducer";
import { epics as rootEpic } from "models/todos";

const epicMiddleware = createEpicMiddleware();

function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(epicMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  epicMiddleware.run(rootEpic);
  return store;
}

export default configureStore;
