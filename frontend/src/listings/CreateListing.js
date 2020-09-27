import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export default function CreateListing({ user }) {
  const [teacherName, setTeacherName] = useState("");
  const [description, setDescription] = useState("");
  const [courseName, setCourseName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const [teacherLink, setTeacherLink] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "75ch",
      },
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    headerTitle: {
      display: "contents",
      paddingTop: "10ch",
    },
    submitButton: {
      width: "75ch",
      height: "7ch",
    },
    headerContainer: {
      width: "100%",
      padding: "20px",
    },
  }));

  function Header() {
    const classes = useStyles();
    return <div className={classes.headerContainer}>Placeholder header</div>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let objToSend = {
      courseName: courseName,
      description: description,
      teacherName: teacherName,
      companyName: companyName,
      demoDate: dateTime,
      demoRegistrationLink: registrationLink,
      courseOverviewLink: courseLink,
      teacherLink: teacherLink,
    };
    user.functions.insertListing(objToSend);
    console.log(objToSend);
  }

  const classes = useStyles();
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.root}>
          <TextField
            required
            label="Teacher Name"
            type="text"
            variant="outlined"
            value={teacherName}
            onInput={(e) => {
              setTeacherName(e.target.value);
            }}
          />
          <TextField
            required
            label="Course Name"
            type="text"
            variant="outlined"
            value={courseName}
            onInput={(e) => {
              setCourseName(e.target.value);
            }}
          />
          <TextField
            required
            label="Description"
            type="text"
            variant="outlined"
            value={description}
            onInput={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            id="datetime-local"
            label="Course date and time"
            type="datetime-local"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onInput={(e) => {
              setDateTime(e.target.value);
            }}
            value={dateTime}
          />
          <TextField
            required
            label="Company Name"
            type="text"
            variant="outlined"
            value={companyName}
            onInput={(e) => {
              setCompanyName(e.target.value);
            }}
          />
          <TextField
            required
            label="Demo Registration Link"
            type="text"
            variant="outlined"
            value={registrationLink}
            onInput={(e) => {
              setRegistrationLink(e.target.value);
            }}
          />
          <TextField
            label="Course Overview Link"
            type="text"
            variant="outlined"
            value={courseLink}
            onInput={(e) => {
              setCourseLink(e.target.value);
            }}
          />
          <TextField
            label="Instructor Link"
            type="text"
            variant="outlined"
            value={teacherLink}
            onInput={(e) => {
              setTeacherLink(e.target.value);
            }}
          />
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
