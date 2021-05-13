import './App.css';
import { React, useState } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './Global';
import Toggle from './Toggle';

function App(){

  const [title, setTitle] = useState('Farhan Rivaldy')

  const [headerLink] = useState({
    home: { title: 'Home', path: '/' },
    about: { title: 'About', path: '/about' },
    contact: { title: 'Contact', path: '/contact' }
  })

  const [home] = useState({
    title: 'Hi There!',
    subtitle: 'Welcome To My Website',
    text: 'Checkout My Projects'
  })

  const [about] = useState({
    title: 'Tentang Farhan Rivaldy',
  })

  const [contact] = useState({
    title: 'Let\'s Talk!',
  })
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


    return (
      <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <BrowserRouter>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand> <Link className="nav-link" to={headerLink.home.path}>{title}</Link> </NavbarBrand>

            <NavbarToggle className="border-0" aria-controls="navbar-toggle"/>
            <NavbarCollapse id="navbar-toggle">
              <Navbar className="ml-auto">
                  <Link className="nav-link" to={headerLink.home.path}>{headerLink.home.title}</Link>
                  <Link className="nav-link" to={headerLink.about.path}>{headerLink.about.title}</Link>
                  <Link className="nav-link" to={headerLink.contact.path}>{headerLink.contact.title}</Link>
                  <Toggle className="nav-link" theme={theme} toggleTheme={toggleTheme} />
              </Navbar> 
            </NavbarCollapse>
          </Navbar>


        <Route path={headerLink.home.path} exact render={() => <HomePage title={home.title} subtitle={home.subtitle} text={home.text} />} />
        <Route path={headerLink.about.path} exact render={() => <AboutPage title={about.title}/>} />
        <Route path={headerLink.contact.path} exact render={() => <ContactPage title={contact.title} /> } />  

        <Footer />

        </Container>
      </BrowserRouter>
      </ThemeProvider>
    );


  }

export default App;
