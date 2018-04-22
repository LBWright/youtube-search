import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyDufmS0s6odtXVpmOiXnku4kwXtzAT0IwY';


 
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term:'ReactJS'}, (videos) => {
            this.setState({ videos })
        });
    }
    render(){
       
        return( 
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))