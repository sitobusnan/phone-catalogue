import React from 'react';
import { Route, Switch} from 'react-router-dom'
import './App.css';
import Detail from './Components/Detail/Detail'
import List from './Components/List/List'

 const App=()=> {
  return (
    <div className="App">
      <h1>To Test</h1>
      <Switch>
        <Route exact path="/" render={()=><List/>}/>
        <Route exact path="/:id" render={()=><Detail/>}/>
      </Switch>
    </div>
  );
}

export default App;
