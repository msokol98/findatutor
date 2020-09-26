import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'components/navbar';
import Home from 'views/landing';
import Tutors from 'components/tutors';
import Login from 'components/common/forms/login';
import Register from 'components/common/forms/register';
import Portal from 'components/portal';

import userContext from 'context/userContext';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <userContext.Provider value={ user ? {...user, logout: () => setUser(null)} : null}>
      <div className='App'>

        <Navbar />

        <div className='has-background-light' style={{minHeight: 'calc(100vh - 70px)'}}>
          <Router>
            <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route exact={true} path='/tutors' component={Tutors} />

              <Route
                  exact={true}
                  path='/login'
                  render={props => <Login {...props} storeUser={setUser} />}
              />

              <Route exact={true} path='/register' component={Register} />
              <Route 
                    exact={true} 
                    path='/portal' 
                    render={props => <Portal {...props} updateUser={setUser} />}  
              />
            </Switch>
          </Router>
        </div>

      </div>
    </userContext.Provider>

  );
}

export default App;
