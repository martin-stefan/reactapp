import React from 'react';
import Hero from './containers/Hero';
import Post from './components/Post';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './containers/User';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/posts">
            <Post />
          </Route>

          <Route path="/user">
            <User />
          </Route>

          <Route path="/">
            <Hero />
            <About />
          </Route>


        </Switch>
      
        
      </div>
    </Router>
  );
}

export default App;
