import './SuccessfulUpload.css';
import { useRef } from 'react';
import PlaceHolderImage from '../../images/338x225-placeholder-image.png'

function SuccesfulUpload (props) {
  const handleClickUrlButton = () => {
    navigator.clipboard.writeText(props.imageURL);
    alert('URL has been copied to the clipboard');
  }

	return(
		<div className="succesful-upload-main-container">
			<div className="green-tick-vector-image-container"></div>
			<p classNameName="successful-upload-text"> Uploaded Successfully! </p>
			<img src={props.imageURL || PlaceHolderImage} className="uploaded-image"/>
			<div className="upload-copy-link-container">
				<p className="upload-image-link"> {props.imageURL} </p>
				<button className="upload-image-link-copy-button" onClick={handleClickUrlButton}> Copy Link</button>
			</div>
		</div>
	);
}

export default SuccesfulUpload;