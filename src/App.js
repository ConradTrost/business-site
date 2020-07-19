import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Jumbotron, Row, Col, Button } from 'react-bootstrap/';

import birds from './assets/images/birds.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Conrad Trost",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
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

          <Navbar bg="transparent" expand="lg" fixed="top">
            <Navbar.Brand>Conrad Trost</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/skills">Skills</Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* <img src={birds} width="100%" position="absolute" alt={birds}></img> */}

          <Jumbotron className="jumbotron jumbotron-fluid">
            <Row className="jumbo-row">
              <Col></Col>
              <Col>
                <h2 className="centered-jumbo ml-auto display-3">Web Developer</h2>

              </Col>
              <Col></Col>
            </Row>
          </Jumbotron>
          
          <div className="idkyet"></div>

        </Container>
      </Router>
    );
  }
}


export default App;
