import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'components/general/navbar';
import Home from 'views/landing';
import Tutors from 'views/tutors';

function App() {
  return (
    <div className='App'>

      <Navbar />

      <div className='has-background-light' style={{minHeight: 'calc(100vh - 70px)'}}>
        <Router>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/tutors' component={Tutors} />
          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;
