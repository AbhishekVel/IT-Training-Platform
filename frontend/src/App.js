import React, { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "react-loader-spinner";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./home/Home";
import CreateListing from "./listings/CreateListing";
import tinyDegreesLogo from "./tinydegreeslogo.png";

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
    minHeight: "100vh",
  },
  content: {
    display: "flex",
    flexDirection: "column",
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
          {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/createListing">
              <CreateListing user={user}></CreateListing>
            </Route>
            <Route path="/">
              <Home user={user} />
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
      <img
        style={{ marginBottom: 0, paddingBottom: 0 }}
        src={tinyDegreesLogo}
        width={100}
        height={100}
      />
      <p style={{ marginTop: 0 }}>
        © 2020 TinyDegrees Inc. All rights reserved.
      </p>
    </div>
  );
}
