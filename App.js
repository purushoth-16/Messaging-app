import React from 'react';
import Header from "./Header"
import Login from './Login'
import './App.css';
import {useStateValue} from './StateProvider'
import Chat from './Chat'
import Sidebar from './Sidebar'
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  
  const [{user},dispatch]=useStateValue()
  return (
    <div className="app">
      <Router>
         {!user ? (
           <Login/>
         ):(
      <>
      <Header/>
      <div className='app__body'>
      <Sidebar/>
      <Switch>
        <Route path='/room/:roomId'>
          <Chat/>
         
        </Route>
        <Route path='/'>
          <h1>Welcome</h1>
          </Route>
      </Switch>
      </div>
      </>
         )}
      </Router>
    </div>
  );
}

export default App;
