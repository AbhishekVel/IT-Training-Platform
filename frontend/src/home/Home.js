import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Listings from "./../listings/Listings";
import homeImg from "./../illustrations/undraw_youtube_tutorial_2gn3.svg";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const useStyles = (onMobile) =>
  makeStyles((theme) => ({
    container: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      width: "100%",
      margin: 0,
      padding: 0,
      backgroundImage: "linear-gradient(#E3EAF7, #E3EAF7, white)",
    },
    topSection: {
      height: "450px",
      width: "100%",
      display: "flex",
      margin: 0,
      padding: 0,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: "2%",
      paddingTop: "2%",
    },
    centeredTopSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    textSection: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "20px",
      width: onMobile ? "300px" : "600px",
      height: onMobile ? "180px" : "300px",
    },
    title: {
      fontWeight: "bold",
      fontSize: onMobile ? "25px" : "45px",
      fontFamily: "Palatino",
      color: "#444053",
    },
    subtitle: {
      color: "#525151",
      fontSize: onMobile ? "20px" : "25px",
      fontFamily: "Palatino",
    },
  }));

export default function Home({ user }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const classes = useStyles(isTabletOrMobile)();

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <div className={classes.centeredTopSection}>
          <div className={classes.textSection}>
            <Typography className={classes.title}>
              Find the Top Courses for Software Training
            </Typography>
            <Typography className={classes.subtitle}>
              Browse through hundreds of courses from the top professional
              training institutes in Hyderabad.
            </Typography>
          </div>
          {isTabletOrMobile ? undefined : (
            <div style={{ marginLeft: "7%" }}>
              <img height={450} src={homeImg} alt="home image" />
            </div>
          )}
        </div>
      </div>
      <Listings user={user} />
    </div>
  );
}
