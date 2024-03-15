import React from "react";

export default class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="input-field col s12">
        <input
          placeholder="Search film..."
          type="search"
          className="validate"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => this.props.searchMovies(this.state.search)}
        >
          Search
        </button>
      </div>
    );
  }
}
