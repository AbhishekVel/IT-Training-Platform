import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Listings from "./../listings/Listings";
import homeImg from "./../illustrations/undraw_youtube_tutorial_2gn3.svg";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = (onMobile) =>
  makeStyles((theme) => ({
    container: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      width: "100%",
      backgroundImage: "linear-gradient(#E3EAF7, #E3EAF7, #F7F8FA)",
    },
    centeredTopSection: {
      padding: theme.spacing(8, 0, 8),
      display: "flex",
      flexDirection: "row",
    },
    textSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    title: {
      fontWeight: "bold",
      fontFamily: "Palatino",
      color: "#444053",
    },
    subtitle: {
      color: "#525151",
      fontFamily: "Palatino",
    },
  }));

export default function Home({ user }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const classes = useStyles(isTabletOrMobile)();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="root" className={classes.container}>
        <div className={classes.centeredTopSection}>
          <Container
            maxWidth="sm"
            disableGutters
            className={classes.textSection}
          >
            <Typography
              className={classes.title}
              variant={isTabletOrMobile ? "h4" : "h2"}
              align="center"
              gutterBottom
            >
              Find the Top Courses for Software Training
            </Typography>
            <Typography
              variant={isTabletOrMobile ? "h6" : "h5"}
              align="center"
              color="textSecondary"
              paragraph
              className={classes.subtitle}
            >
              Browse through hundreds of courses from the top professional
              training institutes in Hyderabad.
            </Typography>
          </Container>
          {isTabletOrMobile ? undefined : (
            <Container maxWidth="sm" disableGutters>
              <img height={450} src={homeImg} alt="home image" />
            </Container>
          )}
        </div>
        <Listings user={user} />
      </Container>
    </React.Fragment>
  );
}
