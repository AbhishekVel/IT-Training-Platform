import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import defaultImage from "./defaultcourseimg.jpg";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "react-responsive";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = (onPhone) =>
  makeStyles((theme) => ({
    courseName: {
      fontSize: onPhone ? ".8rem" : "1.3rem",
      fontFamily: "Palantino",
      marginBottom: 0,
      paddingBottom: 0,
      fontWeight: "bold",
      color: "#444053",
    },
    courseDescription: {
      fontSize: onPhone ? ".6rem" : "1rem",
      fontFamily: "Palantino",
      marginBottom: 0,
      paddingBottom: 0,
    },
    courseTeacher: {
      fontSize: onPhone ? ".6rem" : "1rem",
      color: "#303030",
      fontFamily: "Palantino",
    },
    companyName: {
      color: "#303030",
      fontSize: onPhone ? ".6rem" : "1rem",
      fontFamily: "Palantino",
    },
    price: {
      fontSize: onPhone ? ".6rem" : "1rem",
      fontFamily: "Palantino",
      fontWeight: "bold",
      color: "#444053",
    },
    courseDuration: {
      fontSize: onPhone ? ".6rem" : "1rem",
      fontFamily: "Palantino",
      color: "#505050",
    },
    courseImage: {
      marginTop: onPhone ? "10px" : undefined,
      width: onPhone ? "38px" : "150px",
      height: onPhone ? "33px" : "80px",
      borderRadius: "10px",
      marginRight: "3%",
    },
  }));

export default function Listing({ data, shaded }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const classes = useStyles(isTabletOrMobile)();
  const history = useHistory();

  return (
    <ListItem
      button
      onClick={() => {
        history.push(`/courses/${data._id}`);
      }}
      style={{
        flexDirection: "column",
        padding: "1%",
        marginBottom: "1%",
        backgroundColor: shaded ? "#F7F5F5" : undefined,
      }}
    >
      {/* Grid container for image */}
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <img
            className={classes.courseImage}
            src={data.courseImageUrl || defaultImage}
          />
        </Grid>
        {/* Grid container for course details */}
        <Grid item container xs={10}>
          <Grid item xs={9}>
            <Typography className={classes.courseName}>
              {data.courseName}
            </Typography>
          </Grid>
          <Grid item xs={3} container justify="flex-end">
            <Typography className={classes.price}>₹{data.price}</Typography>
          </Grid>
          {/* NEW ROW */}
          <Grid item xs={12}>
            <Typography className={classes.courseDescription}>
              {data.briefDescription}
            </Typography>
          </Grid>

          {/* NEW ROW */}
          <Grid item xs={5}>
            <Typography className={classes.courseTeacher}>
              {data.teacherName}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            {/* empty space*/}
          </Grid>
          <Grid item xs={5} container justify="flex-end">
            <Typography className={classes.companyName}>
              {data.companyName}
            </Typography>
          </Grid>
          {/* NEW ROW */}

          <Grid item xs={5}>
            <Typography className={classes.courseDuration}>
              {data.totalHours} hours ○ {data.totalDays} days
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}
