import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import Rank from "./components/Rank/Rank"

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
      input:""
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onSubmit = () => {
    console.log("Click")
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
            onSubmit={this.onSubmit}
          />
          {/*
                <FaceRecognition/>*/}
        </div>
      );
  }
}

export default App;
