import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAtoGq9kO_w5088dnPt-nrKHZg7fNzReao";
// Create a new component. This component should produce some HTML

//const App = () => {
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("surfboards");
  }

  //YTSearch({ key: API_KEY, term: 'surfboards' }, function (data) {
  //YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => {
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      // console.log(data);
      //this.setState({ videos: data });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 100);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));
//ReactDOM.render(<App />, document.getElementbyId('app'));
