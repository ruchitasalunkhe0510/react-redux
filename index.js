const redux = require("redux");
const createStore = redux.createStore;

// console.log("from index");
const BUY_CAKE = "BUY_CAKE"; //action

function buyCake() {
  return {
    type: "BUY_CAKE",
    info: "first redux option",
  };
}

//reducer
//(previousState, action) => new state
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

//redux store =>
//1) hold application state
//2)allow to access to state via getState()
// 3)allow state to update via dispatch(action)
//4) registers listeners via subscribe(listener)
//5)handles unregistering of listeners via the function returned by subscribe(listener)

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
