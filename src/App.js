import React, { Component } from 'react';
import './App.css';
import ModalPopup from "./components/ModalPopup";

class App extends Component {
  constructor() {
    super()
    this.state = {
      twitterHandle: null,
      modal: false
    }
  }

  onSubmit = () => {
    console.log(this.inputRef.value)
    this.setState(state => {
      return { twitterHandle: this.inputRef.value };
    })
  }

  render() {
    const { twitterHandle } = this.state;

    return (
      <div className="container">

        <div className="formStuff">
          <input ref={node => this.inputRef = node} className="input-handle" placeholder="Please enter a Twitter handle" />
          <div className="text-center button-div">



              <ModalPopup submit={this.onSubmit} twitterHandle={twitterHandle} />



            {twitterHandle && <p>{twitterHandle}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
