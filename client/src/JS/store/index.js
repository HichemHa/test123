import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

const middleware = [thunk];

const initialState = {};

// function saveData(state) {
//   try {
//     const sState = JSON.stringify(state.productReducer.product)
//     localStorage.setItem('product', sState);
//   } catch (error) {
//     console.log(error);
//   }
// }

const store = createStore(
  rootReducer,
  initialState,

  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);
// store.subscribe(() => saveData(store.getState()));

export default store;
