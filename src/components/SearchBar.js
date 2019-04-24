import React from 'react';

class SearchBar extends React.Component {

	state = { term: '' };
	// Called whenever a user types something
	// event is a standard JS property
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
	// onFormSubmit = event => {
	// 	event.preventDefault();
	// 	console.log(this.state.term);
	// }
	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.term)
		// console.log(this.state.term);
	}	

	render() {
		return (
			<div className="ui segment">
				<form 
					className="ui form" 
					// onSubmit={(event)=>this.onFormSubmit(event)}
					onSubmit={this.onFormSubmit}
				>
					<div className="field">
						<label>Image Search</label>
						<input 
							type="text" 
							placeholder="Search for an image..."
							onChange={(e) => this.setState( { term: e.target.value } ) }
							value={ this.state.term } 
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;