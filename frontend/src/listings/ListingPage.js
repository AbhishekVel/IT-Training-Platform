import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function ListingPage({ user }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const classes = useStyles(isTabletOrMobile)();
  let { id } = useParams();

  const [courseData, setCourseData] = useState();

  useEffect(() => {
    async function fetchDataForCourse() {
      console.log(id);
      const courseData = await user.functions.getListing(id);
      setCourseData(courseData);
    }

    fetchDataForCourse();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.container}>
        <Container maxWidth="xl" className={classes.mainCourseDetails}>
          <Grid></Grid>
        </Container>
      </Container>
    </React.Fragment>
  );
}

const useStyles = (onPhone) =>
  makeStyles((theme) => ({
    container: {
      display: "flex",
      flex: 1,
    },
  }));
