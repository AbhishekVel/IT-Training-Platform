import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";

import puneethImage from "./puneeth.jpeg";
import abhishekImage from "./abhishek.jpeg";
import javedImage from "./javed.png";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: "linear-gradient(#E3EAF7, #E3EAF7, #F7F8FA)",
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  personDescription: {
    fontSize: "15px",
    fontFamily: "Palatino",
    color: "#444053",
  },
  linkButton: {
    marginLeft: "7px",
    marginRight: "130px",
  },
  aboutSection: {
    backgroundImage: "linear-gradient(#E3EAF7, #E3EAF7, #F7F8FA)",
    padding: theme.spacing(8, 0, 6),
  },
  aboutUsPageFont: {
    fontFamily: "Palatino",
    color: "#444053",
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.aboutSection}>
          <Container maxWidth="md">
            <Typography
              className={classes.aboutUsPageFont}
              variant="h2"
              align="center"
              gutterBottom
            >
              Improving the Course Searching Process
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              className={classes.aboutUsPageFont}
            >
              The cost of a software course can range between ₹5,000 and
              ₹40,000. For many, this large sum of money can be one of the
              biggest investments in their lives. The existing environment makes
              it difficult to find the perfect course that satisfies your
              criteria. TinyDegrees aims to make course searching a fun and
              simple process.
            </Typography>
          </Container>
        </div>
        <div className={classes.heroContent}>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.aboutUsPageFont}
            >
              Team
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={abhishekImage}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.aboutUsPageFont}
                    >
                      Abhishek Velayudham
                    </Typography>
                    <Typography className={classes.personDescription}>
                      After graduating from the University of Maryland, Abhishek
                      started working at Samsara as a software engineer. He
                      previously worked as an engineer at Microsoft, Facebook,
                      and J.P. Morgan.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="link"
                      color="default"
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/abhishek-velayudham/"
                      className={classes.linkButton}
                    />
                    <Button
                      variant="link"
                      color="default"
                      startIcon={<GitHubIcon />}
                      href="https://github.com/AbhishekVel"
                    />
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={javedImage}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.aboutUsPageFont}
                    >
                      Javed Akthar Shaik
                    </Typography>
                    <Typography className={classes.personDescription}>
                      After graduating from the University of Maryland, Javed
                      started working at Salesforce as a software engineer. He
                      previously worked as an engineer at Salesforce, and J.P.
                      Morgan.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="link"
                      color="default"
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/javed-shaik-48972861/"
                      className={classes.linkButton}
                    />
                    <Button
                      variant="link"
                      color="default"
                      startIcon={<GitHubIcon />}
                      href="https://github.com/javedshaik"
                    />
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={puneethImage}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.aboutUsPageFont}
                    >
                      Puneeth Bikkumanla
                    </Typography>
                    <Typography className={classes.personDescription}>
                      After graduating from the University of Maryland, Puneeth
                      started working at MongoDB as a software engineer. He
                      previously worked as an engineer at MongoDB, and J.P.
                      Morgan.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="link"
                      color="default"
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/puneethbikkumanla/"
                      className={classes.linkButton}
                    />
                    <Button
                      variant="link"
                      color="default"
                      startIcon={<GitHubIcon />}
                      href="https://github.com/PuneethBikkumanla"
                    />
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
