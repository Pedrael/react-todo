import './App.scss'

import React from "react"
import MainLayout from './MainLayoutFolder/MainLayout'
import Editlayout from './EditLayoutFolder/EditLayout'

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
            <Route path='/edit/:id' component={Editlayout}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
