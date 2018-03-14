import React, { Component } from 'react';
import dataHandling from "./components/dataHandling";
import ModalPopup from "./components/ModalPopup";

class App extends Component {
  constructor() {
    super()
    this.state = {
      twitterHandle: null,
      modal: false,
      data: null
    }
  }

  loadData = (twitterHandle) => {
    const callback = (data) => {
      this.setState(prevState => {
        return {
          ...prevState,
          data
        }
      });
    }

    dataHandling(callback, twitterHandle);
  }


  onSubmit = () => {
    //console.log(this.inputRef.value);
    this.loadData(this.inputRef.value);
    this.setState(state => {
      return { twitterHandle: this.inputRef.value };
    });
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
