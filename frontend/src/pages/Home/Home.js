import { Component } from 'react';
import './Home.css';

class Home extends Component {
	constructor(props){
		super(props);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (event) => {
		console.log(3);
		// event.preventDefault();
	}

	onChangeFileInput = (selectedFiles) => {
		console.log(selectedFiles);
		this.handleSubmit();
	}
	render() {
		return(
			<>
				<div className="home-page-container">
				<h1 className="home-header-text">Upload Your Image</h1>
				<p className="home-header-subtext">File should be Jpeg, png.......</p>
				<div className="image-upload-container">
					<div className="image-upload-vector-container">
					</div>
					<p className="image-upload-text"> Drag and Drop your image here</p>
				</div>
				<p className="image-upload-text-OR"> OR </p>
				<div>
					<form id="form" onSubmit={this.props.handleSubmit}>
							<input id="files" type="file" className="image-upload-button" accept="image/*"onChange={(e) => this.onChangeFileInput(e.target.files)}/>	 
					</form>
				</div>
				</div>
			</>
		);
	}
}

export default Home;