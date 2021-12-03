import { Component } from 'react';
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
	
	// handleUploadingChange(){
	// 	if(this.state.isUploading){
	// 		this.setState({isUploading: false})
	// 	} else {
	// 		this.setState({isUploading: true})
	// 	}
	// }

	render() {
		const isUploading = this.state.isUploading ;

		const renderUploadPageState = () => {
			if(isUploading) {
				return <UploaderStatusLoading uploadingStatus={this.state.isUploading} />
			}
			else {
				return <UploadingForm uploadingStatus={this.state.isUploading} handleUploadingChange={this.handleUploadingChange}/>
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