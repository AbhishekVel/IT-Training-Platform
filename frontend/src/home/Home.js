import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Listings from "./../listings/Listings";
import homeImage from "./rsz_homeimage2.jpg";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  homeImageStyle: {
    width: "1280px",
    height: "450px",
    backgroundSize: "100% 100%",
    borderRadius: "20px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    margin: "10px",
  },
  subtitle: {
    color: "#525151",
    fontSize: "20px",
    fontFamily: "Courier New",
  },
}));

export default function Home({ user }) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div>
        <Typography className={classes.title} variant="h1">
          Find the Top Courses for Software Training
        </Typography>
      </div>
      <div>
        <Typography className={classes.subtitle} variant="h3">
          Browse through hundreds of courses from the top professional training
          institutes in Hyderabad.
        </Typography>
      </div>
      <img src={homeImage} className={classes.homeImageStyle}></img>
      <Listings user={user} />
    </Container>
  );
}
