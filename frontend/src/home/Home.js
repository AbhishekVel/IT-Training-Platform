import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Listings from "./../listings/Listings";
import homeImage from "./homeimage.png";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  topSection: {
    height: "450px",
    width: "100%",
    display: "flex",
  },
  informationSection: {
    display: "flex",
    backgroundImage: "url(" + homeImage + ")",
    // alignSelf: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    maxHeight: "450px",
    maxWidth: "1280px",
    borderRadius: "20px",
    flex: 1,
    backgroundPosition: "0% 100%",
  },
  textSection: {
    // width: "600px",
    // height: "300px",
    marginLeft: "5%",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    margin: "10px",
    fontFamily: "Palatino",
  },
  subtitle: {
    margin: "10px",
    color: "#525151",
    marginBottom: "2px",
    marginTop: "2px",
    fontSize: "1.2rem",
    fontFamily: "Palatino",
  },
}));

export default function Home({ user }) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.topSection}>
        <div className={classes.informationSection}>
          <div className={classes.textSection}>
            <Typography className={classes.title}>
              Find the Top Courses for Software Training
            </Typography>

            <Typography className={classes.subtitle}>
              Browse through hundreds of courses from the top professional
              training institutes in Hyderabad.
            </Typography>
          </div>
        </div>
      </div>
      <Listings user={user} />
    </Container>
  );
}
