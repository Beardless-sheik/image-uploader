import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import {Component} from 'react';
import Home from './pages/Home/Home.js';
import SuccesfulUpload from './pages/SuccessfulUpload/SuccessfulUpload.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      uploadSuccesful: false
    }
  }

  handleUploadSuccessfulChange = () => {
    if(this.state.uploadSuccesful){
			this.setState({uploadSuccesful: false})
		} else {
			this.setState({uploadSuccesful: true})
		}
  } 
  
  render() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1> About Test</h1>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
