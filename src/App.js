import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {BrowserRouter, Switch, Route, Link, Router} from 'react-router-dom'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: "Farhan Rivaldy",
      headerLink: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Hi There!',
        subtitle: 'Welcome To My Website',
        text: 'Checkout My Projects'
      },
      about: {
        title: 'About Farhan Rivaldy',
      },
      contact: {
        title: 'Let\'s Talk!',
      },


    }
  }

  render(){
    return (
      <BrowserRouter>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand> Farhan Rivaldy </NavbarBrand>

            <NavbarToggle className="border-0" aria-controls="navbar-toggle"/>
            <NavbarCollapse id="navbar-toggle">
              <Navbar className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
              </Navbar> 
            </NavbarCollapse>
          </Navbar>


        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
        <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>} />
        <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} /> } />  

        <Footer />

        </Container>
      </BrowserRouter>

    );
  }

}

export default App;
