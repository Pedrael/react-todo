import './App.scss'

import React from "react"
import MainLayout from './MainLayoutFolder/MainLayout'
import EditLayout from './EditLayoutFolder/EditLayout'

import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from './store/store.js'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MainLayout}/>
            <Route path='/edit/:id' component={EditLayout}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
