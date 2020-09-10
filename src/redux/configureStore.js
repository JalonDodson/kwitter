import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import likeMiddleware from "./middleware/like";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  const store = createStore(persistedReducer, applyMiddleware(thunk, likeMiddleware));
  const persistor = persistStore(store);
  return { store, persistor };
}
