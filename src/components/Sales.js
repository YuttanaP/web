import React, { Component } from "react";
import logo from "../logo.svg";
import { observer } from "mobx-react";
import Mobx from "../mobx/TestStore";
import { SearchSales } from "./SearchSales";

@observer
class Sales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      count: 0
    };
  }

  componentDidMount = () => {
    // setTimeout(() => {
    //   this.setState({ time: 1 })
    // }, 3000)
  };

  render() {
    let { time } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {Mobx.getCount}
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Learn React {Mobx.getCount} */}
          </a>
          {!time && (
            <SearchSales
              _fname="Yuttana"
              _lname="Phi"
              _title={() => {
                return `Wellcome to MobX`;
              }}
            />
          )}
          {/* <input value={Mobx.getName} onChange={e => Mobx.setName(e.target.value)} /> */}
        </header>
      </div>
    );
  }
}

export default Sales;
