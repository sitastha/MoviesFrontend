import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/index";
import ShowDetail from "./pages/showDetail";
import NotFoundPage from "./pages/notFound";
import Login from "./components/navbar/Login";
import SignUp from "./components/navbar/signup";
import Main from "./pages/home";
import Trend from "./pages/Trend";
import Last from "./pages/Last";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    minHeight: "90vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/Main">
              <Main />
            </Route>
            <Route path="/Trend">
              <Trend />
            </Route>
            <Route path="/Last">
              <Last />
            </Route>

            <Route path="/show/:id">
              <ShowDetail />
            </Route>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Container>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
