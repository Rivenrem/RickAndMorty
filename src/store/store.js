import createSagaMiddleware from "@redux-saga/core";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import charactersReducer from "./charactersSlice";
import saga from "../saga/saga";
import locationsReducer from "./locationsSlice";
const sagaMiddleware = createSagaMiddleware(saga);

export default configureStore({
  reducer: {
    characters: charactersReducer,
    locations: locationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);
