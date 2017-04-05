import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
//youtube API key
const API_KEY = 'AIzaSyCZPAUzgfhG58zwsdt8fQkL1rkZAIjycAw';



//create a component

class App extends Component{
	constructor(props){
		super(props);

		this.state = {videos: []};

			YTSearch({key: API_KEY, term: 'CodeMonkey'}, (videos) => {
				this.setState({videos});

		});

	}

	render() {
		return (
			 <div>
				 <SearchBar/>
			 </div>
		);
	}
}


//put component's HTML in the DOM

ReactDom.render(<App/>, document.querySelector('.container'));