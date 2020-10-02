import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Listing from "./Listing";
import List from "@material-ui/core/List";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";

const MAX_LISTINGS_PER_PAGE = 10;

export default function Listings({ user }) {
  const classes = useStyles();

  const [coursesDataPaginated, setCoursesDataPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);

  function setStateFromRawCoursesData(coursesData) {
    var tempCoursesDataPaginated = [];
    const paginatedLength = Math.ceil(
      coursesData.length / MAX_LISTINGS_PER_PAGE
    );
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

  function setSearchValue(event) {
    async function getSearchResults(searchString) {
      // Todo this is pretty ineficient, can locally cache results for specific queries instead of recomputing every time
      var results;
      if (searchString.length === 0) {
        results = (await user.functions.getAllListings()).results;
      } else {
        results = await user.functions.searchListings({
          searchTerm: searchString,
        });
      }
      setStateFromRawCoursesData(results);
    }
    setCurrentPage(1);
    getSearchResults(event.target.value);
  }

  useEffect(() => {
    async function fetchCoursesData() {
      const fetchDataResults = await user.functions.getAllListings();
      const coursesData = fetchDataResults.results;
      // const coursesData = fakeListingObject;
      setStateFromRawCoursesData(coursesData);
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
              onChange={setSearchValue}
            />
            <SearchIcon color="primary" />
          </Paper>
        </div>
        <List>
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
    backgroundColor: "#F6F8FC",
    borderRadius: "35px",
    paddingBottom: "10px",
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(3, 2, 2, 2),
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
    // MAX OF 200 CHARACTERS
    briefDescription:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    price: "6000",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    totalHours: 60,
    totalDays: 30,
    numberOfClicks: 0,
  },
  {
    id: 124,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 1",
    briefDescription:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    price: "6000",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
    totalHours: 60,
    totalDays: 30,
  },
  {
    id: 125,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 2",
    briefDescription:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    price: "12000",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
    totalHours: 60,
    totalDays: 30,
  },
  {
    id: 126,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 3",
    briefDescription:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    price: "6000",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
    totalHours: 60,
    totalDays: 30,
  },
  {
    id: 127,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 4",
    briefDescription:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    price: "8000",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
    totalHours: 60,
    totalDays: 30,
  },
  {
    id: 128,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 5",
    briefDescription:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    price: "10000",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
    totalHours: 60,
    totalDays: 30,
  },
  {
    id: 129,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 6",
    briefDescription:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    price: "12000",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
    totalHours: 60,
    totalDays: 30,
  },
  {
    id: 130,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 7",
    briefDescription:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    price: "3000",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
    totalHours: 60,
    totalDays: 30,
  },
  {
    id: 131,
    courseImageUrl: null,
    courseName: "The Web Developer Bootcamp 8",
    briefDescription:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    price: "15000",
    teacherName: "John Doe",
    companyName: "Naresh Technologies",
    demoDate: new Date(2020, 12, 5, 13, 30),
    demoRegistrationLink: "https://www.udemy.com/courses/development/",
    courseOverviewLink: "https://www.udemy.com/courses/development/",
    teacherLink: "https://www.udemy.com/courses/development/",
    numberOfClicks: 0,
    totalHours: 60,
    totalDays: 30,
  },
];
