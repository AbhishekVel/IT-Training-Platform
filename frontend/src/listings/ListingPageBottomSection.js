import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { useMediaQuery } from "react-responsive";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";

import defaultTeacherPic from "../illustrations/defaultTeacherPic.png";

function renderSyllabus(classes, syllabus) {
  return syllabus.map((syllabusObj, idx) => {
    return (
      <List>
        <ListItem id={idx}>
          <ListItemIcon>
            <CheckIcon></CheckIcon>
          </ListItemIcon>
          <ListItemText>
            <Typography className={classes.learnString}>
              {syllabusObj.syllabus}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    );
  });
}

export default function ListingPageButtomSection({ data }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const classes = useStyles(isTabletOrMobile)();

  const hasSyllabus = data.syllabus && data.syllabus.length > 0;

  const firstColumnSyllabus = (syllabus) =>
    syllabus.slice(0, Math.ceil(syllabus.length / 2));
  const secondColumnSyllabus = (syllabus) =>
    syllabus.slice(Math.ceil(syllabus.length / 2));

  return (
    <div className={classes.bottomSection}>
      {/* Another grid for the teacher info + course info */}
      <Grid container spacing={2}>
        <Grid item container xs={12} md={6}>
          {/* teacher info */}
          <Paper className={classes.aboutTeacher}>
            <img
              src={data.teacherPic || defaultTeacherPic}
              className={classes.teacherPic}
            />
            <Typography className={classes.teacherName}>
              Instructor {data.teacherName}
            </Typography>
            <Typography className={classes.teacherBio}>
              {data.teacherBio
                ? data.teacherBio
                : "Contact course owner for more details on the instructor."}
            </Typography>
          </Paper>
        </Grid>

        <Grid item container xs={12} md={6} spacing={2} direction="column">
          <Grid item>
            <Paper className={classes.courseOverview}>
              <Typography className={classes.courseOverviewTitle}>
                Course Overview
              </Typography>
              <Typography className={classes.courseLongDescription}>
                {data.longDescription}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.courseOverview}>
              <Typography className={classes.courseRequirementsTitle}>
                Requirements
              </Typography>
              <Typography className={classes.courseRequirements}>
                {data.requirements || "Nothing but a positive attitude!"}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      {hasSyllabus && (
        <div className={classes.whatYoullLearnSection}>
          <Typography className={classes.whatYoullLearnText}>
            Course Outline
          </Typography>
          <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
            <Grid item xs={6}>
              {renderSyllabus(classes, firstColumnSyllabus(data.syllabus))}
            </Grid>
            <Grid item xs={6}>
              {renderSyllabus(classes, secondColumnSyllabus(data.syllabus))}
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
}

const useStyles = (onPhone) =>
  makeStyles((theme) => ({
    teacherName: {
      marginTop: "1%",
      marginBottom: "1%",
      fontSize: onPhone ? "1rem" : "1.5rem",
      color: "#5A556E",
      fontFamily: "Palantino",
      fontWeight: "bold",
    },
    teacherBio: {
      fontSize: onPhone ? ".8rem" : "1.1rem",
      color: "#444053",
      fontFamily: "Palantino",
    },
    aboutTeacher: {
      width: "100%",
      display: "flex",
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
      padding: theme.spacing(2, 2, 2, 2),
    },
    bottomSection: {
      flexDirection: "row",
      padding: theme.spacing(3, 3, 3, 3),
    },
    teacherPic: {
      width: "100px",
      height: "100px",
      borderRadius: "50px",
    },
    courseOverview: {
      width: "100%",
      display: "flex",
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
      padding: theme.spacing(2, 2, 2, 2),
    },
    courseRequirementsTitle: {
      color: "#5A556E",
      fontFamily: "Palantino",
      fontWeight: "bold",
      fontSize: onPhone ? "1rem" : "1.5rem",
    },
    courseRequirements: {
      marginTop: "1%",
      fontSize: onPhone ? ".8rem" : "1.1rem",
      color: "#444053",
      fontFamily: "Palantino",
    },
    courseOverviewTitle: {
      color: "#5A556E",
      fontFamily: "Palantino",
      fontWeight: "bold",
      fontSize: onPhone ? "1rem" : "1.5rem",
    },
    courseLongDescription: {
      marginTop: "1%",
      fontSize: onPhone ? ".8rem" : "1.1rem",
      color: "#444053",
      fontFamily: "Palantino",
    },
    whatYoullLearnText: {
      marginTop: "3%",
      color: "#5A556E",
      fontFamily: "Palantino",
      fontWeight: "bold",
      fontSize: onPhone ? ".9rem" : "1.3rem",
    },
    learnString: {
      fontSize: onPhone ? ".8rem" : "1rem",
      color: "#444053",
      fontFamily: "Palantino",
    },
    whatYoullLearnSection: {
      display: "flex",
      marginTop: "2%",
      //   width: "100%",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#F4F1F1",
    },
  }));
