import React from 'react';
import Unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import '../css/App.css'

class App extends React.Component {
	state = { images : [] }
	
	onSearchSubmit = async (term) => {
		console.log(term)
		const response = await Unsplash.get('/search/photos', {
			params: { query: term }
		});
		console.log(response.data.results);

		this.setState( { images : response.data.results });
	}

	render() {
		return (
			<div className="ui container search-container" style={{ marginTop: '10px'}}> 
				<SearchBar onSearchSubmit={this.onSearchSubmit} /> 
				Found: {this.state.images.length} images
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;