const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// console.log("from index");
const BUY_CAKE = "BUY_CAKE"; //action
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake() {
  return {
    type: "BUY_CAKE",
    info: "first redux option",
  };
}
function BUY_Icecream() {
  return {
    type: BUY_ICECREAM,
  };
}
//reducer
//(previousState, action) => new state
// const initialState = {
//   numOfCakes: 10,
//   numOfIcrems: 20,
// };
const intitialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcrems: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIcrems: state.numOfIcrems - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = intitialCakeState, action) => {
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
const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcrems: state.numOfIcrems - 1,
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

//multiple reducer is combine
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(BUY_Icecream());
store.dispatch(BUY_Icecream());
unsubscribe();
