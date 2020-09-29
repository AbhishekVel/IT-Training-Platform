import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import defaultImage from "./defaultcourseimg.jpg"; // Tell webpack this JS file uses this image
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    margin: ".5% .1%",
    padding: ".25% .1%",
    flexDirection: "row",
    width: "100%",
  },
  courseDetails: {
    flexDirection: "row",
    display: "flex",
    flex: 1,
    width: "100%",
  },
  leftSideCourseDetails: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "90%",
  },
  rightSideCourseDetails: {
    display: "flex",
    marginLeft: "auto",
    flexDirection: "column",
    width: "10%",
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
    fontSize: "14px",
  },
  companyName: {
    marginTop: "auto",
    marginBottom: 0,
    width: "100%",
    color: "#303030",
  },
  courseImage: {
    maxWidth: "150px",
    maxHeight: "100px",
    width: "100%",
    height: "auto",
    borderRadius: "15px",
    marginRight: "3%",
  },
  courseDemoListings: {},
}));

export default function Listing({ data, shaded }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <ListItem
        onClick={() => setOpen(!open)}
        button
        // This adds a slight tint to every other bar -- just though it'd add a bit of hazazzz
        style={shaded ? { backgroundColor: "#F7F5F5" } : undefined}
      >
        <div className={classes.container}>
          {/*// This looks sorta ugly right now, maybe if users cant figure out how to expand the list item, we can put this back
           {open ? (
            <ExpandLess
              style={{
                alignSelf: "center",
                justifySelf: "center",
                marginRight: "1%",
              }}
            />
          ) : (
            <ExpandMore
              style={{
                alignSelf: "center",
                justifySelf: "center",
                marginRight: "1%",
              }}
            />
          )} */}
          <img
            src={data.courseImageUrl || defaultImage}
            // width={150}
            // height={100}
            className={classes.courseImage}
            alt="course avatar"
          />
          <div className={classes.courseDetails}>
            <div className={classes.leftSideCourseDetails}>
              <b className={classes.courseName}>{data.courseName}</b>
              <p className={classes.courseDescription}>{data.description}</p>
              <p className={classes.courseTeacher}>{data.teacherName}</p>
            </div>

            <div className={classes.rightSideCourseDetails}>
              <p className={classes.companyName}>{data.companyName}</p>
            </div>
          </div>
        </div>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <div className={classes.courseDemoListings}>
            <Typography className={classes.courseDemoDate}>
              {data.listings &&
                data.listings.map((demoInfo, index) => {
                  return (
                    <ListItem className={classes.demoDateListItem} key={index}>
                      <Link href={demoInfo.link}>
                        {new Date(demoInfo.date).toLocaleString()}
                      </Link>
                    </ListItem>
                  );
                })}
            </Typography>
          </div>
        </List>
      </Collapse>
    </div>
  );
}
