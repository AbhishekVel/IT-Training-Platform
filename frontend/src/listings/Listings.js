import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Listing from "./Listing";
import List from "@material-ui/core/List";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";

const MAX_LISTINGS_PER_PAGE = 5;

export default function Listings({ user }) {
  const classes = useStyles();
  // const results = user.functions.searchListings({ courseName: "a" });

  const [coursesDataPaginated, setCoursesDataPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);

  useEffect(() => {
    async function fetchCoursesData() {
      const fetchDataResults = await user.functions.getAllListings();
      const coursesData = fetchDataResults.results;
      var tempCoursesDataPaginated = [];
      const paginatedLength =
        Math.trunc(coursesData.length / MAX_LISTINGS_PER_PAGE) + 1;
      for (var i = 0; i < paginatedLength; i += 1) {
        tempCoursesDataPaginated.push(
          coursesData.slice(
            i * MAX_LISTINGS_PER_PAGE,
            (i + 1) * MAX_LISTINGS_PER_PAGE
          )
        );
      }
      setCoursesDataPaginated(tempCoursesDataPaginated);
    }

    fetchCoursesData();
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.searchBar}>
          <Paper component="form" className={classes.searchField}>
            <InputBase
              className={classes.input}
              placeholder="Search course demos (ex. java)"
            />
            <SearchIcon color="primary" />
          </Paper>
        </div>
        <List component="nav" aria-label="main mailbox folders">
          {coursesDataPaginated &&
            coursesDataPaginated[currentPage - 1] &&
            coursesDataPaginated[currentPage - 1].map((listing, index) => {
              return (
                <Listing key={listing._id} data={listing} shaded={index % 2} />
              );
            })}
        </List>
        <div className={classes.pagination}>
          <Pagination
            count={coursesDataPaginated.length}
            variant="outlined"
            color="primary"
            onChange={(event, pageNumber) => setCurrentPage(pageNumber)}
          />
        </div>
      </Container>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    marginTop: "40px",
    marginBottom: "10px",
    // marginLeft: "23px",
  },
  searchField: {
    padding: "2px 4px",
    display: "flex",
    width: 400,
    alignItems: "center",
    paddingRight: "10px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    height: "50px",
  },
  pagination: {
    alignSelf: "center",
  },
}));

const fakeListingObject = [
  {
    id: 123,
    courseImageUrl: "https://img-a.udemycdn.com/course/480x270/567828_67d0.jpg",
    courseName: "Learn Python Programming Masterclass 0",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 124,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 1",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 125,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 2",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 126,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 3",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 127,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 4",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 128,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 5",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 129,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 6",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 130,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 7",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 131,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 8",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 132,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 9",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 133,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 10",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 134,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 11",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 135,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 12",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 136,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 13",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 137,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 14",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 138,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 15",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 139,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 16",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 140,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 17",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
  {
    id: 141,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp  18",
    description:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
  },
];
