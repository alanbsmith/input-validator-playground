import React, { Component } from "react";
import classNames from "classnames";

import "src/assets/stylesheets/base.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputError: false,
      phoneNumber: ""
    };
  }

  handleChange(phoneNumber) {
    this.setState({
      phoneNumber
    });
  }

  render() {
    const { inputError, phoneNumber } = this.state;

    const inputFieldClasses = classNames("phone-input__field", {
      error: inputError
    });

    const submitBtnClasses = classNames("phone-input__submit", {
      disabled: !phoneNumber.length || inputError
    });

    return (
      <div className="phone-input">
        <label className="phone-input__label">phone number</label>
        <input
          className={inputFieldClasses}
          onChange={e => this.handleChange(e.target.value)}
          placeholder="(202) 224-3121"
          type="text"
          value={phoneNumber}
        />
        <div className="phone-input__warning">
          {this.state.inputError && "invalid input"}
        </div>
        <button
          className={submitBtnClasses}
          disabled={!phoneNumber.length || inputError}
        >
          submit
        </button>
      </div>
    );
  }
}

export default App;
