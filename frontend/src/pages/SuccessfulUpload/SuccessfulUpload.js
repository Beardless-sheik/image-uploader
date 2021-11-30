import './SuccessfulUpload.css';
import PlaceHolderImage from '../../images/338x225-placeholder-image.png'

function SuccesfulUpload() {
	return(
		<div className="succesful-upload-main-container">
			<div className="green-tick-vector-image-container"></div>
			<p classNameName="successful-upload-text"> Uploaded Successfully! </p>
			<img src={PlaceHolderImage} className="uploaded-image"/>
			<div className="upload-copy-link-container">
				<p className="upload-image-link">https://sampleLink/onyourdomain/imagesucessfulyuploaded.com</p>
				<button className="upload-image-link-copy-button"> Copy Link</button>
			</div>
		</div>
	);
}

export default SuccesfulUpload;