import React, { Component } from 'react';
import short_temper from './img/gary_1.jpg';
import play_along from './img/gary_2.jpg';
import ReactGA from 'react-ga';
import './App.css';


ReactGA.initialize('UA-42196574-2', {
  debug: true,
  titleCase: false,
})

class FoundationSetup extends Component {
  render(){
    return (
      <div className="row">
          <div className="small-11 cell small-centered "> 
            {this.props.children}
          </div>
        </div>
      )
  }
}

class Sunset extends Component {
  render() {
    return(
    <FoundationSetup>
      <h4 className="small-description"><i>This project has been closed! I'm a better person now!</i></h4>
    </FoundationSetup> 
    ) 
  };
}

class Top extends Component {
  render() {
    return(
    <FoundationSetup>
      <h1 className="heading">Meet Gary.</h1>
    </FoundationSetup> 
    ) 
  };
};

class Temper extends Component {
  render() {
    return (
      <div>
        <FoundationSetup>
          <h3 className="description">He's got a short temper</h3>
        </FoundationSetup>
        <FoundationSetup>
          <img src={short_temper} alt="Short Temper"/>
        </FoundationSetup>
      </div>
      )
  }
}

class Personal extends Component {
  render() {
    return (
      <FoundationSetup> 
        <h3 className="description">
          It's not personal. He just doesn't like you
        </h3>
      </FoundationSetup>
      )
  }
}

class PhoneNumber extends Component {
  render() {
    return (
      <div>
        <FoundationSetup>
          <h4 className="small-description">
            Give him a call or a shoot him a text. 
          </h4>
        </FoundationSetup>
        <FoundationSetup>
          <h5 className="small-description">
            His number is <a href="http://wut.isup.dog">(no longer available but this links is a nice surprise!)</a>
          </h5>
        </FoundationSetup>
      </div>
      )
  }
}

class Learn extends Component {
  render() {
    return (
      <div>
        <FoundationSetup className="row">
            <img src={play_along} alt="Play Along"/>
        </FoundationSetup>
        <FoundationSetup className="row">
            <h5 className="description">
              Play along. He might learn from you.
            </h5>
        </FoundationSetup>
      </div>
      )
  }
}

class Anytime extends Component {
  render() {
    return (
        <FoundationSetup>
          <h5 className="small-description">
            He'll insult you anytime of the day
          </h5>
        </FoundationSetup>
      )
  }
}

class Footer extends Component {
  render() {
    return (
      <FoundationSetup>
        <p className="footer">
          Created by 
          <ReactGA.OutboundLink 
          eventLabel="swearbotHomepageClick"
          to="http://www.avibagla.com"> Avi Bagla
          </ReactGA.OutboundLink>
        </p>
      </FoundationSetup>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div> 
        <Sunset/>
        <Top/>
        <Temper/>
        <Personal/>
        <PhoneNumber/>
        <Learn/>
        <Anytime/>
        <Footer/>
      </div>

      );
  }
}

export default App;
