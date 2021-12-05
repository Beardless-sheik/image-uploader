import { Component } from "react";
import './UploadingFile.css';

async function postData(url='', data = {}) {
	const requestOptions = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }
	let response = await fetch(url, requestOptions);
	if (response.status == 201) {
    let json = await response.json(); // (3)
    return json;
  }
  throw new Error(response.status);
}

class UploadingForm extends Component {
	constructor(props){
		super(props);
		this.handleUploadingChange = this.handleUploadingChange.bind(this);
		this.handleUploadSuccessfulChange = this.handleUploadSuccessfulChange.bind(this);

		this.state = {
			uploadedImage: ''
		}
	}

	handleUploadingChange = (e) => {
		this.props.handleUploadingChange();
	}

	handleUploadSuccessfulChange = () => {
		console.log("trying succesful change")
		this.props.handleUploadSuccessfulChange();
	}

	handleSubmit = (event) => {
		// event.preventDefault();
		const formData = new FormData();
		formData.append('uploadedImage', this.state.uploadedImage)
		let response = null;
		this.handleUploadingChange();
		const submitPost = async () => {
			console.log(this);
			try {
				response = await postData('https://reqres.in/api/users', {"name": "Alick", "job": "tech-lead"});
				console.log(response);         
			}
			catch(err) {
				console.log("Ohhhhh no");
				console.log(err);
			}
			finally {
				console.log("Function to do clean up");
				this.handleUploadSuccessfulChange();
			}
		};
		submitPost();
	}

	onChangeFileInput = (selectedFiles) => {
		console.info("selected files:", selectedFiles);
		this.setState({ uploadedImage: selectedFiles[0] })
		this.handleSubmit();
	}

	render() {
		return(
			<>
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
			</>
		)
	}
}

export default UploadingForm;