import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import defaultImage from "./defaultcourseimg.jpg";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Loader from "react-loader-spinner";
import Button from "@material-ui/core/Button";
import ListingPageBottomSection from "./ListingPageBottomSection";

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}

export default function ListingPage({ user }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const classes = useStyles(isTabletOrMobile)();
  let { id } = useParams();

  const [data, setCourseData] = useState();
  const [loading, setLoadingStatus] = useState(true);

  useEffect(() => {
    async function fetchDataForCourse() {
      const courseData = await user.functions.getListing(id);
      setCourseData(courseData);
      setLoadingStatus(false);
    }

    fetchDataForCourse();
  }, []);

  if (loading) {
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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.container}>
        <div className={classes.mainCourseDetails}>
          <Grid container spacing={1}>
            <Grid item container md={2} spacing={2}>
              <Grid item xs={4} md={12}>
                <img
                  className={classes.courseImage}
                  src={data.courseImageUrl || defaultImage}
                />
              </Grid>
            </Grid>
            <Grid item md={1}>
              {/* Empty grid */}
            </Grid>
            <Grid item container xs={12} md={7}>
              <Grid item xs={12}>
                <Typography className={classes.courseName}>
                  {data.courseName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.courseDescription}>
                  {data.briefDescription}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.courseDuration}>
                  {data.totalHours} hours ○ {data.totalDays} days
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} md={2} alignItems="center">
              <div className={classes.rightSideMainDetails}>
                {data.price && (
                  <Grid item xs={12}>
                    <Typography className={classes.price}>
                      Course cost: ₹{data.price}
                    </Typography>
                  </Grid>
                )}
                {data.contactEmail && (
                  <Grid item xs={12}>
                    <Typography className={classes.contact}>
                      Email: {data.contactEmail}
                    </Typography>
                  </Grid>
                )}
                {data.contactPhone && (
                  <Grid item xs={12}>
                    <Typography className={classes.contact}>
                      Phone: {formatPhoneNumber(data.contactPhone)}
                    </Typography>
                  </Grid>
                )}
                {data.courseLink && (
                  <Grid item xs={12}>
                    <Button
                      onClick={() => {
                        window.location.href = data.courseLink;
                      }}
                      className={classes.enquiryButton}
                    >
                      Enroll in class
                    </Button>
                  </Grid>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
        <ListingPageBottomSection data={data} />
      </Container>
    </React.Fragment>
  );
}

const useStyles = (onPhone) =>
  makeStyles((theme) => ({
    container: {
      display: "flex",
      padding: 0,
      margin: 0,
      flexDirection: "column",
    },
    mainCourseDetails: {
      backgroundColor: "#444053",
      padding: theme.spacing(5, 3, 7, 3),
      flexDirection: "row",
    },
    rightSideMainDetails: {
      flexDirection: "column",
    },
    enquiryButton: {
      backgroundColor: "#fff",
      color: "444053",
      fontSize: onPhone ? ".8rem" : "1rem",
      width: "100%",
      marginTop: "3%",
    },
    courseImage: {
      width: "100%",
      maxHeight: "150px",
      borderRadius: "10px",
    },
    courseName: {
      fontSize: onPhone ? "1.5rem" : "2rem",
      fontFamily: "Palantino",
      marginBottom: 0,
      paddingBottom: 0,
      fontWeight: "bold",
      color: "#f7f7f9",
    },
    courseDescription: {
      fontSize: onPhone ? "1rem" : "1.2rem",
      fontFamily: "Palantino",
      marginBottom: 0,
      paddingBottom: 0,
      color: "#f7f7f9",
    },
    companyName: {
      fontSize: onPhone ? "1rem" : "1.2rem",
      fontFamily: "Palantino",
      color: "#f7f7f9",
    },
    contact: {
      fontSize: onPhone ? "1rem" : "1.2rem",
      fontFamily: "Palantino",
      fontWeight: "bold",
      color: "#f7f7f9",
      marginBottom: "2%",
    },
    price: {
      fontSize: onPhone ? "1rem" : "1.2rem",
      fontFamily: "Palantino",
      fontWeight: "bold",
      color: "#f7f7f9",
      marginBottom: "2%",
    },
    courseDuration: {
      fontSize: onPhone ? "1rem" : "1.2rem",
      fontFamily: "Palantino",
      color: "#f7f7f9",
    },
  }));
