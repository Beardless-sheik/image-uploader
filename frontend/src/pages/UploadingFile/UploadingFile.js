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
	if (response.status == 200) {
    let json = await response.json(); // (3)
		console.log(json);
    return json;
  }
  throw new Error(response.status);
}

class UploadingForm extends Component {
	constructor(props){
		super(props);
	}

	handleSubmit = (event) => {
		console.log(3);
		async function submitPost() {
			try {
				await postData('https://reqres.in/api/users', {"name": "Alick", "job": "tech-lead"});
			}
			catch(err) {
				console.log("Ohhhhh no");
				console.log(err);
			}
			finally {
				console.log("Function to do clean up");
			}
		};
		submitPost();
	}

	onChangeFileInput = (selectedFiles) => {
		console.log(selectedFiles);
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