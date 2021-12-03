import { Component } from 'react';
import { Navigate } from 'react-router-dom'
import UploaderStatusLoading from '../../components/UploaderLoading/UploaderLoading.js'
import UploadingForm from '../UploadingFile/UploadingFile.js';
import './Home.css';

class Home extends Component {
	constructor(props){
		super(props);
		this.handleUploadingChange = this.handleUploadingChange.bind(this);
		this.state = {
			isUploading: false
		};
	}
	
	handleUploadingChange(){
		if(this.state.isUploading){
			this.setState({isUploading: false})
		} else {
			this.setState({isUploading: true})
		}
	}

	render() {
		const isUploading = this.state.isUploading ;
		console.log(this.props.uploadSuccesfulBool)
		if (this.props.uploadSuccesfulBool === true) {
			console.log(3);
    	return <Navigate to='/uploadsuccess'/>
  	}
		const renderUploadPageState = () => {
			if(isUploading) {
				return <UploaderStatusLoading uploadingStatus={this.state.isUploading} />
			}
			else {
				return <UploadingForm uploadingStatus={this.state.isUploading} handleUploadingChange={this.handleUploadingChange} handleUploadSuccessfulChange={this.props.handleUploadSuccessfulChange} uploadSuccesfulBool={this.props.uploadSuccesfulBool} />
			}
		};

		return(
			<>
				<div className="home-page-container">
					<h1 className="home-header-text">Upload Your Image</h1>
					<p className="home-header-subtext">File should be Jpeg, png.......</p>
					{renderUploadPageState()}
				</div>	
			</>
		);
	}
}

export default Home;