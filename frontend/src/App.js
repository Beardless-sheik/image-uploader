import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {Component} from 'react';
import Home from './pages/Home/Home.js';
import SuccesfulUpload from './pages/SuccessfulUpload/SuccessfulUpload.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      uploadSuccesful: false,
      imageURL: ''
    }
  }

  handleUploadSuccessfulChange = () => {
    if(this.state.uploadSuccesful) {
			this.setState({uploadSuccesful: false})
		} else {
      console.log("upload - true")
			this.setState({uploadSuccesful: true})
		}
  }
  
  handleImageUrlChange = (newURL) => {
    this.setState({imageURL: newURL })
  }
  
  render() {
    console.log("App is re-rendering");
    return (
      <>
        <Routes>
            <Route path="/" element={
              <Home handleUploadSuccessfulChange={this.handleUploadSuccessfulChange} uploadSuccesfulBool={this.state.uploadSuccesful} handleImageUrlChange={this.handleImageUrlChange}/>
            } />
            <Route path="uploadsuccess" element={<SuccesfulUpload imageURL={this.state.imageURL}/>}/>
        </Routes>
        <footer> Copyright. Alick </footer>
      </>
    );
  }
}

export default App;
