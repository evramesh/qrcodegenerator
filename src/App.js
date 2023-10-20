import * as React from "react";
import { QRCode } from "react-qrcode-logo";

import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { name: "", URL: "" };

  urlSave = () => {
    const { name } = this.state;
    this.setState({ URL: name });
  };

  enterUrl = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { URL } = this.state;

    return (
      <div className="main">
        <div className="sub">
          <div>
            <input
              className="inputF"
              onChange={this.enterUrl}
              placeholder="Enter Any URL"
            />

            <button onClick={this.urlSave} class="button">
              Generate
            </button>
          </div>
          <div className="qr-code">
            <QRCode
              fgColor="#0ac281"
              bgColor="#fafcfc"
              size={250}
              value={URL}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
