import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import defaultImage from "./defaultcourseimg.jpg"; // Tell webpack this JS file uses this image
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  courseImage: {
    borderRadius: "15px",
    marginRight: "15px",
  },
  divider: {
    margin: "10px 2px",
  },
  container: {
    display: "flex",
    margin: "10px 2px",
    padding: "5px 2px",
    flexDirection: "row",
  },
  courseDetails: {
    flexDirection: "row",
    display: "flex",
    flex: 1,
  },
  leftSideCourseDetails: {
    display: "flex",
    flexDirection: "column",
  },
  rightSideCourseDetails: {
    display: "flex",
    marginLeft: "auto",
    flexDirection: "column",
  },
  courseName: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: "17px",
  },
  courseDescription: {
    marginTop: "2px",
    marginBottom: 0,
    fontSize: "15px",
  },
  courseTeacher: {
    fontSize: "12px",
    marginTop: "1px",
    color: "#303030",
  },
  courseDemoDate: {
    marginTop: "auto",
    marginBottom: 0,
  },
  companyName: {
    marginTop: "auto",
    marginBottom: 0,
    color: "#303030",
  },
}));

export default function Listing({ data, lastOnPage }) {
  const classes = useStyles();
  return (
    <ListItem button>
      <div
        onClick={() => alert("hello from world")}
        className={classes.container}
      >
        <img
          src={data.courseImageUrl || defaultImage}
          width={150}
          height={100}
          className={classes.courseImage}
          alt="course avatar"
        />
        <div className={classes.courseDetails}>
          <div className={classes.leftSideCourseDetails}>
            <b className={classes.courseName}>{data.courseName}</b>
            <p className={classes.courseDescription}>{data.description}</p>
            <p className={classes.courseTeacher}>{data.teacherName}</p>
            {/* Change this demo time to format properly + maybe we should
        make it so they just list all of the demo timings, and clicking on it 
    will show list of demo times + can link on it to register for that time */}
            <p className={classes.courseDemoDate}>Demo Time:</p>
            <Typography>
              <Link href={data.demoRegistrationLink}>
                Demo: {data.demoDate.toLocaleString()}
              </Link>
            </Typography>
          </div>

          <div className={classes.rightSideCourseDetails}>
            <p className={classes.companyName}>{data.companyName}</p>
          </div>
        </div>
      </div>
      {!lastOnPage && <hr className={classes.divider} />}
    </ListItem>
  );
}
