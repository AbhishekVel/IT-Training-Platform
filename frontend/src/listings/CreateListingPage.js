import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SendIcon from "@material-ui/icons/Send";

const defaultRepeatedValues = [
  {
    syllabus: "",
  },
];

const defaultValues = [
  {
    companyName: "",
    courseName: "",
    courseDescription: "",
    coursePrice: "",
    courseImageUrl: "",
    fullCourseDescription: "",
    courseLink: "",
    contactPhone: "",
    contactEmail: "",
    courseHours: "",
    courseDays: "",
    teacherName: "",
    teacherPicture: "",
    teacherBio: "",
    sampleLectureCourseYoutubeUrl: "",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "linear-gradient(#E3EAF7, #E3EAF7, #F7F8FA)",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    borderRadius: "20px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  formTitle: {
    fontFamily: "Palatino",
    color: "#444053",
  },
  addRemoveButton: {
    textDecoration: "none",
    textTransform: "capitalize",
  },
  submitButton: {
    marginTop: "15px",
  },
}));

export default function CreateListing({ user }) {
  const classes = useStyles();
  const [fields, setFields] = useState(defaultValues);
  const [repeatedFields, setRepeatedFields] = useState(defaultRepeatedValues);

  function handleChangeInput(event) {
    const values = [...fields];
    const { name, value } = event.target;
    values[0][name] = value;
    setFields(values);
  }

  function handleChangeInputRepeatedFields(i, event) {
    const values = [...repeatedFields];
    const { name, value } = event.target;
    values[i][name] = value;
    setRepeatedFields(values);
  }

  function handleAddInputRepeatedFields() {
    const values = [...repeatedFields];
    values.push({
      syllabus: "",
    });
    setRepeatedFields(values);
  }

  function handleRemoveInputRepeatedFields(i) {
    const values = [...repeatedFields];
    values.splice(i, 1);
    setRepeatedFields(values);
  }

  function handleSubmit(e) {
    e.preventDefault();

    //send to backend
    var objToSendToBackend = {
      companyName: fields[0].companyName,
      courseName: fields[0].courseName,
      courseDescription: fields[0].courseDescription,
      coursePrice: fields[0].coursePrice,
      courseImageUrl: fields[0].courseImageUrl,
      fullCourseDescription: fields[0].fullCourseDescription,
      courseLink: fields[0].courseLink,
      contactPhone: fields[0].contactPhone,
      contactEmail: fields[0].contactEmail,
      courseHours: fields[0].courseHours,
      courseDays: fields[0].courseDays,
      teacherName: fields[0].teacherName,
      teacherPicture: fields[0].teacherPicture,
      teacherBio: fields[0].teacherBio,
      sampleLectureCourseYoutubeUrl: fields[0].sampleLectureCourseYoutubeUrl,
      syllabus: repeatedFields,
    };

    user.functions.insertListing(objToSendToBackend);

    //clear input
    e.target.reset();
  }

  return (
    <div className={classes.container}>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.formTitle}
          >
            Add Course
          </Typography>
          <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="courseName"
                  name="courseName"
                  label="Course name"
                  maxLength={80}
                  fullWidth
                  value={fields.courseName}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="courseDescription"
                  name="courseDescription"
                  label="Brief Course Description"
                  multiline={true}
                  maxLength={150}
                  fullWidth
                  value={fields.courseDescription}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="coursePrice"
                  name="coursePrice"
                  label="Course Price"
                  type="number"
                  fullWidth
                  value={fields.coursePrice}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="courseHours"
                  name="courseHours"
                  label="Total length of course (hours)"
                  type="number"
                  fullWidth
                  value={fields.courseHours}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="courseDays"
                  name="courseDays"
                  label="Total length of course (days)"
                  type="number"
                  fullWidth
                  value={fields.courseDays}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="courseLink"
                  name="courseLink"
                  label="Course Link (optional)"
                  fullWidth
                  value={fields.courseLink}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="courseImageUrl"
                  name="courseImageUrl"
                  label="Course Image Url (optional)"
                  fullWidth
                  value={fields.courseImageUrl}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="fullCourseDescription"
                  name="fullCourseDescription"
                  label="Full Course Description"
                  fullWidth
                  multiline={true}
                  value={fields.fullCourseDescription}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="sampleLectureCourseYoutubeUrl"
                  name="sampleLectureCourseYoutubeUrl"
                  label="Sample lecture youtube URL (optional)"
                  fullWidth
                  multiline={true}
                  value={fields.sampleLectureCourseYoutubeUrl}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="teacherName"
                  name="teacherName"
                  label="Teacher name (optional)"
                  fullWidth
                  value={fields.teacherName}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="teacherPicture"
                  name="teacherPicture"
                  label="Teacher picture Url (optional)"
                  fullWidth
                  value={fields.teacherPicture}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="teacherBio"
                  name="teacherBio"
                  label="Teacher bio (optional)"
                  fullWidth
                  value={fields.teacherBio}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="companyName"
                  name="companyName"
                  label="Company name (optional)"
                  fullWidth
                  value={fields.companyName}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="contactEmail"
                  name="contactEmail"
                  label="Company contact email (optional)"
                  fullWidth
                  value={fields.contactEmail}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="contactPhone"
                  name="contactPhone"
                  label="Company contact phone (optional)"
                  type="number"
                  fullWidth
                  value={fields.contactPhone}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
            </Grid>
            {repeatedFields.map((field, idx) => {
              return (
                <Grid key={`${field}-${idx}`}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="syllabus"
                      name="syllabus"
                      label="Syllabus [Course topic ex. Hadoop, Java]"
                      fullWidth
                      value={field.syllabus}
                      onChange={(e) => handleChangeInputRepeatedFields(idx, e)}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-end"
                  >
                    <Button
                      className={classes.addRemoveButton}
                      onClick={() => handleAddInputRepeatedFields()}
                      startIcon={<AddBoxIcon />}
                    >
                      Add course topic
                    </Button>
                    <Button
                      className={classes.addRemoveButton}
                      startIcon={<DeleteForeverIcon />}
                      onClick={() => handleRemoveInputRepeatedFields(idx)}
                    >
                      delete course topic
                    </Button>
                  </Grid>
                </Grid>
              );
            })}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Button
                  className={classes.submitButton}
                  startIcon={<SendIcon />}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </main>
    </div>
  );
}
