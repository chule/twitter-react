import React, { Component } from 'react';
// import dataHandling from "./components/dataHandling";
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

  // loadData = (twitterHandle) => {
  //   const callback = (data) => {
  //     this.setState(prevState => {
  //       return {
  //         ...prevState,
  //         data
  //       }
  //     });
  //   };

  //   dataHandling(callback, twitterHandle);
  // }


  componentDidMount() {


    var url = 'http://ec2-18-221-137-114.us-east-2.compute.amazonaws.com:80/result';
    //var data = "[{\"0\":\"realdonaldtrump\"}]";
    var data = [{ 0: "realdonaldtrump" }];

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    }).then(res => res.json())
        .catch(error => {
            console.log("Post error")
            console.error('Error:', error)
        })
        .then(response => console.log('Success:', response));


  }

  onSubmit = () => {
    //console.log(this.inputRef.value);
    // this.loadData(this.inputRef.value);
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
