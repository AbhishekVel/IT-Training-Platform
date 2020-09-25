import React, { useState, useEffect } from "react";
import { Stitch, UserApiKeyCredential } from "mongodb-stitch-browser-sdk";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Loader from "react-loader-spinner";
import Listings from "./listings/Listings";

export default function App() {
  const [client, setClient] = useState(null);
  useEffect(() => {
    const stitchAppClient = Stitch.initializeDefaultAppClient(
      process.env.REACT_APP_MONGO_DB_APP_ID
    );
    const credential = new UserApiKeyCredential(
      process.env.REACT_APP_MONGO_DB_API_KEY
    );
    stitchAppClient.auth
      .loginWithCredential(credential)
      .then((authedId) => {
        setClient(stitchAppClient);
      })
      .catch((err) => console.error(`login failed with error: ${err}`));
  }, []);

  if (!client) {
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
    <Router>
      <div>
        <nav>
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
        </nav>

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
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Listings />
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
