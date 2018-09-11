//import React from 'react';
import React, { Component } from 'react';
//const Component = React.Component;


// const SearchBar = () => {
//     return <input />;
// };

//class SearchBar extends React.Component {
class SearchBar extends Component {
    render() {
        //return <input onChange={this.onInputChange} />
        return <input onChange={(event) => console.log(event.target.value)} />;
    }
    //onInputChange(event) {
    //console.log(event.target.value);
    //}
}

export default SearchBar;