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
    courseName: "",
    courseDateTime: "",
  },
];

const defaultValues = [
  {
    firstName: "",
    lastName: "",
    companyName: "",
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
  },
}));

export default function CreateListing() {
  const classes = useStyles();
  const [fields, setFields] = useState(defaultValues);
  const [repeatedFields, setRepeatedFields] = useState(defaultRepeatedValues);

  function handleChangeInput(event) {
    const values = [...fields];
    const { name, value } = event.target;
    values[name] = value;
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
      courseName: "",
      courseDateTime: "",
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
    console.log(fields);
    console.log(repeatedFields);
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
            Add Listing
          </Typography>
          <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  value={fields.firstName}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  value={fields.lastName}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
            </Grid>
            {repeatedFields.map((field, idx) => {
              return (
                <div>
                  <Grid>
                    <Grid xs={12} key={`${field}-${idx}`}>
                      <TextField
                        required
                        id="courseName"
                        name="courseName"
                        label="Course Name"
                        fullWidth
                        value={repeatedFields.courseName}
                        onChange={(e) =>
                          handleChangeInputRepeatedFields(idx, e)
                        }
                      />
                    </Grid>
                    <TextField
                      required
                      id="courseDateTime"
                      name="courseDateTime"
                      label="Date and Time"
                      type="datetime-local"
                      fullWidth
                      autoComplete="shipping address-line2"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={repeatedFields.courseDateTime}
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
                      size="large"
                      onClick={() => handleAddInputRepeatedFields()}
                      startIcon={<AddBoxIcon />}
                    >
                      Add course
                    </Button>
                    <Button
                      className={classes.addRemoveButton}
                      size="large"
                      startIcon={<DeleteForeverIcon />}
                      onClick={() => handleRemoveInputRepeatedFields(idx)}
                    >
                      Remove course
                    </Button>
                  </Grid>
                </div>
              );
            })}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="companyName"
                  name="companyName"
                  label="Company name"
                  fullWidth
                  value={fields.companyName}
                  onChange={(e) => handleChangeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
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
