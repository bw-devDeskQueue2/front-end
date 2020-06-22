import React from 'react';

import {Jumbotron, Button, Navbar, Col, Row} from 'reactstrap'
import {Link, Route} from 'react-router-dom'

import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
  <>

      <Navbar>
          <Jumbotron>
            <Row>
              <h1>Lambda Help Desk</h1>
              <Link to={"/"}>
                <Button>
                  Home
                </Button>
              </Link>
          </Row>
          </Jumbotron>  

      </Navbar>
      
      <Route exact path='/'>
        <Row>
          <Col>
            <p>Already Registered?</p>
            <Link to={'/login'}>
                <Button>
                  Log-in
                </Button>
            </Link>
          </Col>
          <Col>
            <p>New to Help Desk?</p>
            <Link to={'/register'}>
                <Button>
                  Register
                </Button>
            </Link>            
          </Col>
        
        </Row>

      </Route>

      <Route path='/login'>
        <Login/>
      </Route>

      <Route path='/register'>
        <Register/>
      </Route>      
  </>
  )
}

export default App;
