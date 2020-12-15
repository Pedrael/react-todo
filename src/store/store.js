import { createStore } from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

let todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
        return state
    case "ADD_TODO":
        return state.update("todoState", (todos) => todos.push(action.todo))
    case "FLUSH":
        return {
          ...state,
          todoState: state.todoState.concat(action.newItem)
        }

    default: return state
  }
}

const initialState = {
  todoState: [{ // array of notes
    name: 'ReduxStoreTest1',
    uniqueid: '0',
    todos: [
      { text: 'lorem ipsum', isChecked: true, uniqueid: '0' },
      { text: 'text2', isChecked: false, uniqueid: '1' },
      { text: 'text1', isChecked: true, uniqueid: '2' }
    ]
  },
  {
    name: 'ReduxStoreTest2',
    uniqueid: '1',
    todos: [
      { text: 'text1', isChecked: true, uniqueid: '0' },
      { text: 'text2', isChecked: false, uniqueid: '1' },
      { text: 'text1', isChecked: false, uniqueid: '2' }
    ]
  },
  {
    name: 'ReduxStoreTest3',
    uniqueid: '2',
    todos: [
      { text: 'text1', isChecked: true, uniqueid: '0' },
      { text: 'text2', isChecked: false, uniqueid: '1' },
      { text: 'text1', isChecked: false, uniqueid: '2' }
    ]
  }]
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(todoReducer, initialState)

store.subscribe(() => { console.log(store.getState()) })

// store.dispatch({ type: 'SET_STATE' })

export default store

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

//store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'counter/incremented' })
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' })
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' })
// {value: 1}

// function createStore(reducer, initialState) {
//     let state = initialState
//     return {
//         dispatch: action => { state = reducer(state, action) },
//         getState: () => state,
//     }
// }
