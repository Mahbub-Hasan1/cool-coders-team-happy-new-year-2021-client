import React from 'react';
import Home from './Components/Home/Home';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div style={{ background: '#111430' }}>
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminPanel />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
