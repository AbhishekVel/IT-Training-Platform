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
