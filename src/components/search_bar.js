//import React from 'react';
import React, { Component } from "react";
//const Component = React.Component;

// const SearchBar = () => {
//     return <input />;
// };

//class SearchBar extends React.Component {
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    //return <input onChange={this.onInputChange} />
    //return <input onChange={(event) => console.log(event.target.value)} />;
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          //        event => this.setState({ term: event.target.value }
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
    //console.log(event.target.value);
  }
}

export default SearchBar;
