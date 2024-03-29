import React, { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "react-loader-spinner";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./home/HomePage";
import CreateListingPage from "./listings/CreateListingPage";
import AboutPage from "./about/AboutPage";
import FeedbackPage from "./feedback/FeedbackPage";
import { useMediaQuery } from "react-responsive";
import ListingPage from "./listings/ListingPage";

import tinyDegreesLogo from "./logo.png";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    backgroundColor: "#f7f7f9",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    minHeight: "86vh",
  },
  footerContainer: {
    display: "flex",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: "#e6eaea",
    width: "100%",
    padding: "20px",
    color: "#303030",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    margin: theme.spacing(0, 0, 2),
  },
  // footerCopyright: {
  //   paddingTop: "30px",
  //   marginLeft: "auto",
  // },
  // footerLogo: {
  //   marginRight: "auto",
  // },
}));

const app = new Realm.App({ id: process.env.REACT_APP_MONGO_DB_APP_ID });

export default function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [user, setUser] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const credentials = Realm.Credentials.apiKey(
      process.env.REACT_APP_MONGO_DB_API_KEY
    );
    app
      .logIn(credentials)
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return (
      <div className={classes.loaderContainer}>
        <Loader
          className="_webpageLoading"
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <CssBaseline />
      <div className={classes.content}>
        <Router>
          <AppBar position="static" color="default">
            <Toolbar>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                <img
                  src={tinyDegreesLogo}
                  height={isTabletOrMobile ? 25 : 35}
                />
              </Link>
              <Typography variant="h6" className={classes.title}></Typography>
              {!isTabletOrMobile && (
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/createlisting"
                >
                  <Button color="inherit">Create Listing</Button>
                </Link>
              )}
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/about"
              >
                <Button color="inherit">About</Button>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/feedback"
              >
                <Button color="inherit">Feedback</Button>
              </Link>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route path="/feedback">
              <FeedbackPage></FeedbackPage>
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/createlisting">
              <CreateListingPage user={user}></CreateListingPage>
            </Route>
            <Route path="/courses/:id">
              <ListingPage user={user} />
            </Route>
            <Route path="/">
              <HomePage user={user} />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <img className={classes.logo} src={tinyDegreesLogo} width={150} />
      <p style={{ marginTop: 0 }}>
        © 2020 TinyDegrees Inc. All rights reserved.
      </p>
    </div>
  );
}
