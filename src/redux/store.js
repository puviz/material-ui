import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(
      reducers,
      composeEnhancers(applyMiddleware(sagaMiddleware)),
    ),
    runSaga: sagaMiddleware.run(sagas),
  };
};

export default configureStore;
