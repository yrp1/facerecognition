import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import Rank from "./components/Rank/Rank"
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"

const app = new Clarifai.App({
 apiKey: '3ff0019decd44ab1b360ff1aefe36fac'
});

const particlesOption = {
  particles: {
    number:{
      value:80,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

class App extends React.Component{
  constructor(){
    super();
    this.state={
      input:"",
      imageUrl:""
    }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value})
  }

  onSubmit = () => {
    this.setState({imageUrl:this.state.input})
    
    app.models
      .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(
        function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        },
        function(err) {
        // there was an error
        }
      );
  }

  render(){
      return (
        <div className="App">
          <Particles className="particles"
                  params={particlesOption}
                />
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkForm 
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl}/>
        </div>
      );
  }
}

export default App;
