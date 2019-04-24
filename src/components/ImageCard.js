import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans : 0 };
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		console.log(this.imageRef.current.addEventListener('load', this.setSpans))
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const grid_row_height = 10;
		const spans = Math.ceil( height / grid_row_height)
		console.log(`${this.imageRef.current.clientHeight} - spans: ${spans}`);
		this.setState( { spans } )
			//imageRef.current.style = `grid-row-end: span ${span}`
	}

	render() {
		const { description, urls} = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}`}}>
				<img 
					ref={this.imageRef}
					alt={description}
					src={urls.regular}
				/>
			</div>
		)
	}
}

export default ImageCard; 