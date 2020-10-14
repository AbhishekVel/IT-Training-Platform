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
  syllabusFields: {
    marginTop: "20px",
    marginBottom: "10px",
  },
}));

export default function CreateListing({ user }) {
  const classes = useStyles();
  const [courseName, setCourseName] = useState("");
  const [briefDescription, setBriefDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [price, setPrice] = useState("");
  const [courseImageUrl, setCourseImageUrl] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setCompanyEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [totalDays, setTotalDays] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherBio, setTeacherBio] = useState("");
  const [teacherPic, setTeacherPic] = useState("");
  const [
    sampleYoutubeLectureVideoUrl,
    setSampleYoutubeLectureVideoUrl,
  ] = useState("");
  const [repeatedFields, setRepeatedFields] = useState(defaultRepeatedValues);

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
      companyName: companyName,
      courseName: courseName,
      briefDescription: briefDescription,
      requirements: requirements,
      price: price,
      courseImageUrl: courseImageUrl,
      longDescription: longDescription,
      courseLink: courseLink,
      contactPhone: contactPhone,
      contactEmail: contactEmail,
      totalHours: totalHours,
      totalDays: totalDays,
      teacherName: teacherName,
      teacherPic: teacherPic,
      teacherBio: teacherBio,
      sampleYoutubeLectureVideoUrl: sampleYoutubeLectureVideoUrl,
      syllabus: repeatedFields,
    };

    setCourseName("");
    setCompanyName("");
    setBriefDescription("");
    setRequirements("");
    setPrice("");
    setCourseImageUrl("");
    setLongDescription("");
    setCourseLink("");
    setContactPhone("");
    setCompanyEmail("");
    setTotalHours("");
    setTotalDays("");
    setTeacherPic("");
    setTeacherName("");
    setTeacherBio("");
    setSampleYoutubeLectureVideoUrl("");
    setRepeatedFields(defaultRepeatedValues);
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
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  inputProps={{ maxLength: 100 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="briefDescription"
                  name="briefDescription"
                  label="Brief Course Overview"
                  multiline={true}
                  maxLength={250}
                  fullWidth
                  value={briefDescription}
                  onChange={(e) => setBriefDescription(e.target.value)}
                  inputProps={{ maxLength: 250 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="longDescription"
                  name="longDescription"
                  label="Full Course Description"
                  fullWidth
                  multiline={true}
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                  inputProps={{ maxLength: 1500 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="requirements"
                  name="requirements"
                  label="Requirements (optional)"
                  multiline={true}
                  maxLength={200}
                  fullWidth
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  inputProps={{ maxLength: 200 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="price"
                  name="price"
                  label="Course Price (optional)"
                  type="number"
                  fullWidth
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="totalHours"
                  name="totalHours"
                  label="Total length of course (hours) (optional)"
                  type="number"
                  fullWidth
                  value={totalHours}
                  onChange={(e) => setTotalHours(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="totalDays"
                  name="totalDays"
                  label="Total length of course (days) (optional)"
                  type="number"
                  fullWidth
                  value={totalDays}
                  onChange={(e) => setTotalDays(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="courseLink"
                  name="courseLink"
                  label="Course Link (optional)"
                  fullWidth
                  value={courseLink}
                  onChange={(e) => setCourseLink(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="courseImageUrl"
                  name="courseImageUrl"
                  label="Course Image Url (optional)"
                  fullWidth
                  value={courseImageUrl}
                  onChange={(e) => setCourseImageUrl(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="sampleYoutubeLectureVideoUrl"
                  name="sampleYoutubeLectureVideoUrl"
                  label="Sample lecture youtube URL (optional)"
                  fullWidth
                  multiline={true}
                  value={sampleYoutubeLectureVideoUrl}
                  onChange={(e) =>
                    setSampleYoutubeLectureVideoUrl(e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="teacherName"
                  name="teacherName"
                  label="Teacher name (optional)"
                  fullWidth
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="teacherPic"
                  name="teacherPic"
                  label="Teacher picture Url (optional)"
                  fullWidth
                  value={teacherPic}
                  onChange={(e) => setTeacherPic(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="teacherBio"
                  name="teacherBio"
                  label="Teacher bio (optional)"
                  fullWidth
                  value={teacherBio}
                  onChange={(e) => setTeacherBio(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="companyName"
                  name="companyName"
                  label="Company name (optional)"
                  fullWidth
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="contactEmail"
                  name="contactEmail"
                  label="Company contact email (optional)"
                  fullWidth
                  value={contactEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="contactPhone"
                  name="contactPhone"
                  label="Company contact phone (optional)"
                  fullWidth
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </Grid>
            </Grid>
            <div className={classes.syllabusFields}>
              {repeatedFields.map((field, idx) => {
                return (
                  <Grid>
                    <Grid item xs={12} key={`${field}-${idx}`}>
                      <TextField
                        required
                        id="syllabus"
                        name="syllabus"
                        label="Syllabus [Course topic ex. Hadoop, Java]"
                        fullWidth
                        value={repeatedFields.syllabus}
                        onChange={(e) =>
                          handleChangeInputRepeatedFields(idx, e)
                        }
                        inputProps={{ maxLength: 100 }}
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
            </div>
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
