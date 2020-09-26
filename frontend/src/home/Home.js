import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Listings from "./../listings/Listings";
import homeImage from "./homeimage.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  informationSection: {
    display: "flex",
    backgroundImage: "url(" + homeImage + ")",
    alignSelf: "center",
    width: "1280px",
    height: "400px",
    backgroundSize: "100% 100%",
    borderRadius: "20px",
  },
  textSection: {
    width: "600px",
    height: "300px",
    marginTop: "30px",
    marginLeft: "50px",
  },
  subtitle: {
    color: "#525151",
    fontSize: "20px",
    marginBottom: "2px",
    marginTop: "2px",
  },
}));

export default function Home({ user }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.informationSection}>
        <div className={classes.textSection}>
          <h1>Find the Top Courses for Software Training</h1>
          <p className={classes.subtitle}>
            Browse through hundreds of courses from the top professional
            training institutes in Hyderabad.
          </p>
        </div>
      </div>
      <Listings user={user} />
    </div>
  );
}
