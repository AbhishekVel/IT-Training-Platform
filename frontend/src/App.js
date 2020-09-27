import React, { useState, useEffect, Text } from "react";
import * as Realm from "realm-web";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "react-loader-spinner";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./home/Home";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    backgroundColor: "#f7f7f9",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    padding: "20px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  footerContainer: {
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: "#e6eaea",
    width: "100%",
    padding: "20px",
    color: "#525151",
  },
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
      <Loader
        className="_webpageLoading"
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
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

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      © 2020 ItSwami Inc. All rights reserved.{" "}
    </div>
  );
}
