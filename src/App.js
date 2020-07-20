import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap/';

import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';

import './App.scss';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Conrad Trost",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Services', path: '/services' },
        { title: 'Skills', path: '/skills' }
      ],
      home: {
        title: 'Motivational Text',
        subTitle: 'Smaller, less motivational text.',
        text: 'W O W'
      },
      about: {
        title: 'About ME'
      },
      skills: {
        title: 'Skills'
      }
    }

  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar expand="lg p-0 ml-auto" fixed="top" className="nav-bar" fluid="true" >
            <Navbar.Brand href="/" className="nav-bar-brand"><i className="fas fa-power-off"></i>Phantom Web Development</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/services">Services</Link>
                  <Link className="nav-link" to="/about">Reviews</Link>
                  <Link className="nav-link" to="/skills">Contact</Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/services" render={() => <ServicesPage />} />


        </Container>
      </Router>
    );
  }
}


export default App;
