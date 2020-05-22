import React from 'react';
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/index'
import SideNavBar from './component/common/SideNavBar'
const store = createStore(rootReducer)
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
          <SideNavBar />
      </Provider>
    </div>
  );
}

export default App;
