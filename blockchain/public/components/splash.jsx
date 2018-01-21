import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({publicKey: ''});
    this.handlePublicKeyChange = this.handlePublicKeyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.style = {
      "background-color": "rgba(255, 255, 255, 0.4)",
      "color": "white",
      "padding": "5px", 

      "border-radius": "20px"
    };
  }
  handlePublicKeyChange(e) {
    e.preventDefault();
    this.setState({publicKey:e.target.value});
  }
  handleSubmit(e) {
    // e.preventDefault();
    this.props.login(this.state.publicKey);

    this.props.history.push(`/borrow`);
  }
  

  render() {
    return (
      <div className="main-container">
        <div className="hero-image">
          <h1 className="splash">Decentralized loans and credit score</h1>
          <ul className="splash">
            <li>Take out loans anonymously</li>
            <li>Build your credit score by interacting with the system</li>
            <li>Earn money by lending to trusted peers</li>
          </ul>
          <div className="hero-text">
            <form className="public-key">
              <TextField 
                hintText="Enter your public key"
                onChange={this.handlePublicKeyChange} 
                value={this.state.publicKey} 
                name="publicKey" 
                type="text" 
              />
              <RaisedButton onClick={this.handleSubmit} label="Get Started"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;