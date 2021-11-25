import './Home.css';

function Home () {
	return(
		<>
			<div class="home-page-container">
			<h1 class="home-header-text">Upload Your Image</h1>
			<p class="home-header-subtext">File should be Jpeg, png.......</p>
			<div class="image-upload-container">
				<div class="image-upload-vector-container">
				</div>
				<p class="image-upload-text"> Drag and Drop your image here</p>
			</div>
			<p class="image-upload-text-OR"> OR </p>
			<div>
			<button class="image-upload-button"> Choose a File! </button>
			</div>
			</div>
		</>
	);
}

export default Home;