import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import defaultImage from "./defaultcourseimg.jpg"; // Tell webpack this JS file uses this image
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import { useMediaQuery } from "react-responsive";

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
  },
  rightSideCourseDetails: {
    display: "flex",
    marginLeft: "auto",
    flexDirection: "column",
  },
  courseName: {
    marginTop: 0,
    marginBottom: 0,
    // color: "#444053",
    fontSize: "1rem",
    fontFamily: "Palantino",
  },
  courseDescription: {
    marginTop: "2px",
    marginBottom: 0,
    fontSize: ".95rem",
    fontFamily: "Palantino",
  },
  courseTeacher: {
    fontSize: ".9rem",
    marginTop: "1px",
    color: "#303030",
    fontFamily: "Palantino",
  },
  companyName: {
    marginTop: "auto",
    marginBottom: 0,
    width: "100%",
    color: "#303030",
    fontSize: ".9rem",
    fontFamily: "Palantino",
  },
  courseDemoListings: {
    flex: "display",
    flexDirection: "column",
  },
  collapsableItem: {
    paddingTop: "1%",
    marginTop: "1%",
    width: "100%",
    borderTop: "1px solid",
    borderTopColor: "#E8E8E8",
  },
}));

export default function Listing({ data, shaded }) {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [open, setOpen] = React.useState(false);
  var dateFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <Box boxShadow={open ? 1 : 0}>
      <ListItem
        onClick={() => setOpen(!open)}
        button
        // This adds a slight tint to every other bar -- just though it'd add a bit of hazazzz
        style={{
          backgroundColor: shaded ? "#F7F5F5" : undefined,
          flexDirection: "column",
          marginLeft: 0,
          paddingLeft: 0,
        }}
      >
        <div className={classes.container}>
          <div
            style={{
              maxWidth: "18%",
              maxHeight: "150px",
              display: "flex",
              marginRight: "1rem",
              flex: 1,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%",
              backgroundImage: `url(${data.courseImageUrl || defaultImage})`,
            }}
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
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          className={classes.collapsableItem}
        >
          <List component="div" disablePadding>
            <div className={classes.courseDemoListings}>
              <ListItem>
                <b
                  style={{
                    fontSize: ".9rem",
                  }}
                >
                  Available Course Demos:
                </b>
              </ListItem>
              {data.listings &&
                data.listings.map((demoInfo, index) => {
                  return (
                    <ListItem className={classes.demoDateListItem} key={index}>
                      <ListItemIcon>
                        <EventIcon />
                      </ListItemIcon>
                      <Link href={demoInfo.link}>
                        <p
                          style={{
                            fontSize: ".9rem",
                            margin: "0 0",
                          }}
                        >
                          {new Date(demoInfo.date).toLocaleDateString(
                            "en-us",
                            dateFormatOptions
                          )}
                        </p>
                      </Link>
                    </ListItem>
                  );
                })}
            </div>
          </List>
        </Collapse>
      </ListItem>
    </Box>
  );
}
