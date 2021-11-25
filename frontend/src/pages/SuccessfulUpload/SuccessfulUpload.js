import './SuccessfulUpload.css';
import PlaceHolderImage from '../../images/338x225-placeholder-image.png'

function SuccesfulUpload() {
	return(
		<div class="succesful-upload-main-container">
			<div class="green-tick-vector-image-container"></div>
			<p class="successful-upload-text"> Uploaded Successfully! </p>
			<img src={PlaceHolderImage} class="uploaded-image"/>
			<div class="upload-copy-link-container">
				<p class="upload-image-link">https://sampleLink/onyourdomain/imagesucessfulyuploaded.com</p>
				<button class="upload-image-link-copy-button"> Copy Link</button>
			</div>
		</div>
	);
}

export default SuccesfulUpload;