import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

// function Header() {
//   const headerContainer = {
//     fontSize: "40px",
//     fontWeight: "bold",
//     fontFamily: "Courier New",
//   };
//   return <div>Add New Listing</div>;
// }

class CreateListing extends React.Component {
  state = {
    listings: [{ date: "", link: "" }],
    teacherName: "",
    courseName: "",
    description: "",
    companyName: "",
    teacherLink: "",
    courseLink: "",
  };

  handleChange = (e) => {
    if (["date", "link"].includes(e.target.className)) {
      let listings = [...this.state.listings];
      listings[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ listings });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addListing = (e) => {
    this.setState((prevState) => ({
      listings: [...prevState.listings, { date: "", link: "" }],
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let objToSend = {
      courseName: this.state.courseName,
      description: this.state.description,
      teacherName: this.state.teacherName,
      companyName: this.state.companyName,
      courseOverviewLink: this.state.courseLink,
      teacherLink: this.state.teacherLink,
      listings: this.state.listings,
    };
    console.log(objToSend);
    // user.functions.insertListing(objToSend);
  };

  render() {
    const root = {
      display: "flex",
      justifyContent: "center",
    };

    const textField = {
      width: "75ch",
      height: "7ch",
      margin: "5px",
    };

    const submitButton = {
      width: "70ch",
      height: "7ch",
      margin: "5px",
    };

    const dateButton = {
      width: "69.5ch",
      height: "7ch",
      margin: "5px",
    };

    //   const submitText =  {
    //     width: "100%",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignContent: "center",
    //     alignItems: "center",
    //     fontWeight: "bold",
    //     fontFamily: "Courier New",
    //     color: "red",
    //   },

    let {
      teacherName,
      courseName,
      description,
      companyName,
      teacherLink,
      courseLink,
      listings,
    } = this.state;

    return (
      <div style={root}>
        {/* <Header></Header> */}
        {/* {formSubmitted && (
        <p className={classes.submitText}>
          Thanks for submitting the listing! 
        </p>
      )} */}
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <FormControl>
            <input
              style={textField}
              required
              type="text"
              variant="outlined"
              name="teacherName"
              id="teacherName"
              value={teacherName}
              placeholder="Teacher Name"
            />
            <input
              style={textField}
              required
              label="Demo Course Name"
              type="text"
              variant="outlined"
              name="courseName"
              id="courseName"
              value={courseName}
              placeholder="Demo Course Name"
            />
            <input
              style={textField}
              required
              label="Description"
              type="text"
              variant="outlined"
              name="description"
              id="description"
              value={description}
              placeholder="Description"
            />
            <input
              style={textField}
              required
              label="Company Name"
              type="text"
              variant="outlined"
              id="companyName"
              name="companyName"
              value={companyName}
              placeholder="Company Name"
            />
            <input
              style={textField}
              label="Course Overview Link (optional)"
              type="text"
              variant="outlined"
              value={courseLink}
              id="courseLink"
              name="courseLink"
              placeholder="Demo Course Overview Link (optional)"
            />
            <input
              style={textField}
              label="Teacher Link [i.e. LinkedIn, GitHub, ...] (optional)"
              type="text"
              variant="outlined"
              id="teacherLink"
              name="teacherLink"
              value={teacherLink}
              placeholder="Teacher Link [i.e. LinkedIn, GitHub, ...] (optional) "
            />
            {listings.map((val, idx) => {
              let dateId = `date-${idx}`,
                linkId = `link-${idx}`;
              return (
                <div key={idx}>
                  <div>
                    <input
                      style={dateButton}
                      className="date"
                      id={dateId}
                      data-id={idx}
                      label="Course date and time"
                      type="datetime-local"
                      variant="outlined"
                      name={dateId}
                      value={listings[idx].date}
                    />
                  </div>
                  <div>
                    <input
                      style={textField}
                      label="Demo Registration Link"
                      type="text"
                      variant="outlined"
                      name={linkId}
                      data-id={idx}
                      id={linkId}
                      className="link"
                      value={listings[idx].link}
                      placeholder="Demo Registration Link"
                    />
                  </div>
                </div>
              );
            })}
            <Button
              style={submitButton}
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.addListing}
            >
              Add demo link and time
            </Button>
            <Button
              style={submitButton}
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
}

export default CreateListing;
