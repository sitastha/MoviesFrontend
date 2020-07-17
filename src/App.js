import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/index';
import ShowDetail from './pages/showDetail';
import NotFoundPage from './pages/notFound';

const useStyles = makeStyles((theme) => ({
  container: {
      textAlign: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',
      minHeight: '90vh',
  },
}));

function App() {

  const classes = useStyles();

  return (
  

  <React.Fragment>
    <div className="App">
  <Navbar/>
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/show/:id">
              <ShowDetail/>
            </Route>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Container>
        <Footer/>
      </div>
  </React.Fragment>
        
  
  );
}

export default App;
