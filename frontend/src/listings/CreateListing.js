import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

function Header() {
  const headerContainer = {
    fontSize: "40px",
    fontWeight: "bold",
    fontFamily: "Palantino",
    display: "flex",
    justifyContent: "center",
  };
  return <div style={headerContainer}>Add New Listing</div>;
}

class CreateListing extends React.Component {
  state = {
    listings: [{ date: "", link: "" }],
    teacherName: "",
    courseName: "",
    description: "",
    companyName: "",
    teacherLink: "",
    courseLink: "",
    formSubmitted: false,
  };

  handleChange = (e) => {
    this.setState({ formSubmitted: false });
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

    this.state.listings.forEach(function (listing) {
      listing.date = new Date(listing.date);
    });

    let objToSend = {
      courseName: this.state.courseName,
      description: this.state.description,
      teacherName: this.state.teacherName,
      companyName: this.state.companyName,
      courseOverviewLink: this.state.courseLink,
      teacherLink: this.state.teacherLink,
      listings: this.state.listings,
    };
    this.setState({
      listings: [{ date: "", link: "" }],
      teacherName: "",
      courseName: "",
      description: "",
      companyName: "",
      teacherLink: "",
      courseLink: "",
      formSubmitted: true,
    });
    this.props.user.functions.insertListing(objToSend);
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
      font: "Palantino",
    };

    const submitButton = {
      width: "70ch",
      height: "7ch",
      margin: "5px",
      font: "Palantino",
    };

    const dateButton = {
      width: "69.5ch",
      height: "7ch",
      margin: "5px",
      font: "Palantino",
    };

    const submitText = {
      display: "flex",
      justifyContent: "center",
      fontWeight: "bold",
      fontFamily: "Palantino",
      color: "green",
    };

    const demoNumberLabel = {
      display: "flex",
      justifyContent: "center",
      fontWeight: "bold",
      fontFamily: "Palantino",
    };

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
      <div>
        <div>
          <Header></Header>
        </div>
        <div>
          {this.state.formSubmitted && (
            <p style={submitText}>
              Thanks for submitting the listing! Submit another one if you would
              like to!
            </p>
          )}
        </div>
        <div style={root}>
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
                      <div>
                        <label
                          style={demoNumberLabel}
                          htmlFor={linkId}
                        >{`Demo #${idx + 1}`}</label>
                      </div>
                      <div>
                        <input
                          required
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
                      <input
                        required
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
                  </div>
                );
              })}
              <Button
                style={submitButton}
                variant="contained"
                color="primary"
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
      </div>
    );
  }
}

export default CreateListing;
