/*
  🚨1 point EXTRA CREDIT 🚨
  Create a middleware that does somethign interesting, use your imagination.
  DO NOT USE ANY OF THE MIDDLEWARE LOCATED IN THE HELP LINK =]
  Don't forget to add it to the applyMiddleware function in ../configureStore.js
  eg: applyMiddleware(thunk, exampleMiddleware)
  https://redux.js.org/advanced/middleware
*/

// const likeMiddleware = (store) => (next) => (action) => {
//   return next(action);
// };
const LIKE_MIDDLEWARE = "likeActions/LIKE_MIDDLEWARE";

const likeMiddleware = store => next => action => {
  switch (action.type) {
    case LIKE_MIDDLEWARE: {
      next(action);
      const results = action.payload.actions.map(a => store.dispatch(a));
      return results;
    }

    default: return next(action);
  }
}
export default likeMiddleware;