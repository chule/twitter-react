import React, { Component } from 'react';
// import dataHandling from "./components/dataHandling";
import ModalPopup from "./components/ModalPopup";
import { request } from "superagent";

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

    // https://davidwalsh.name/fetch

    // working in postman
    // url= http://ec2-18-221-137-114.us-east-2.compute.amazonaws.com:80/result
    // headers= { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    // body= raw "[{\"0\":\"realdonaldtrump\"}]"

    // "[{\"0\":\"realdonaldtrump\"}]"
    // {'Content-Type': 'application/json', 'Accept': 'application/json'}


    var raw = '[{\"0\":\"realdonaldtrump\"}]'

    var url = 'http://ec2-18-221-137-114.us-east-2.compute.amazonaws.com:80/result';
    //var data = "[{\"0\":\"realdonaldtrump\"}]";
    var data = [{ 0: "realdonaldtrump" }];

    // const headers = {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // }

    // console.log(JSON.stringify(raw))

    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(raw),
    //   headers
    // }).then(res => res.json())
    //   .catch(error => {
    //     console.log("Post error")
    //     console.error('Error:', error)
    //   })
    //   .then(response => console.log('Success:', response));


    // var request = new Request(url, {
    //   method: 'POST',
    //   body: JSON.stringify(raw),
    //   headers: new Headers(headers)
    // });

    // fetch(request)
    //   .then(res => res.json())
    //   .then(response => console.log('Success:', response));
    // .catch(error => {
    //   console.log("Post error")
    //   console.error('Error:', error)
    // })
    // .then(response => console.log('Success:', response));

    request
      .post("http://ec2-18-221-137-114.us-east-2.compute.amazonaws.com:80/result")
      .send([{ 0: "realdonaldtrump" }]) // sends a JSON post body
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        // Calling the end function will send the request
      });


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
