import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles((theme) => ({
  feedbackOuterContainer: {
    marginBottom: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  feedbackPageFull: {
    backgroundImage: "linear-gradient(#E3EAF7, #E3EAF7, #F7F8FA)",
  },
  feedbackInnerContainer: {
    borderRadius: "20px",
  },
  feedbackPageFont: {
    fontFamily: "Palatino",
    color: "#444053",
    paddingTop: "20px",
  },
  textField: {
    marginBottom: "20px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },

  submitButton: {
    height: "7ch",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ratingText: {
    fontFamily: "Palatino",
    paddingLeft: "40px",
  },

  ratingStars: {
    paddingLeft: "40px",
    fontFamily: "Palatino",
    fontWeight: "bold",
  },

  writeFeedback: {
    paddingLeft: "40px",
    fontFamily: "Palatino",
    fontWeight: "bold",
    marginTop: "5px",
  },

  rateTheWebsite: {
    fontFamily: "Palatino",
    paddingLeft: "40px",
    paddingTop: "40px",
    fontWeight: "bold",
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.feedbackPageFull}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
          className={classes.feedbackPageFont}
        >
          Please give us feedback!
        </Typography>
        <Container className={classes.feedbackOuterContainer}>
          <Typography
            component="div"
            style={{
              backgroundColor: "white",
              height: "50vh",
              width: "75vh",
            }}
            className={classes.feedbackInnerContainer}
          >
            <Typography
              component="h1"
              variant="h6"
              color="textPrimary"
              gutterBottom
              className={classes.rateTheWebsite}
            >
              Rate the website
            </Typography>
            <Rating
              className={classes.ratingStars}
              name="hover-feedback"
              value={value}
              precision={0.5}
              size="large"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <Box className={classes.ratingText} ml={4}>
                {labels[hover !== -1 ? hover : value]}
              </Box>
            )}
            <Typography
              component="h1"
              variant="h6"
              color="textPrimary"
              gutterBottom
              className={classes.writeFeedback}
            >
              Write feedback
            </Typography>
            <TextField
              className={classes.textField}
              multiline
              rows={1}
              fullWidth
              InputProps={{
                endAdornment: (
                  <Button color="primary" className={classes.submitButton}>
                    Submit
                  </Button>
                ),
              }}
            />
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
}
