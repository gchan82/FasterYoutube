//import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAtoGq9kO_w5088dnPt-nrKHZg7fNzReao';
// Create a new component. This component should produce some HTML




//const App = () => {
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        //YTSearch({ key: API_KEY, term: 'surfboards' }, function (data) {
        //YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => {
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            // console.log(data);
            //this.setState({ videos: data });
            this.setState({ videos });
        });

    }
    render() {
        return <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
    }
}
// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'))
//ReactDOM.render(<App />, document.getElementbyId('app'));