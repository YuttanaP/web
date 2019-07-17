import React, { useState, useEffect } from "react";
import { Observer } from "mobx-react";
import Mobx from "../mobx/TestStore";

export const SearchSales = ({ _fname, _lname, _title }) => {
  const [fname, setfirstName] = useState(_fname);
  const [lname, setLastname] = useState(_lname);

  //Similar to componentDidMount and componentDisUpdate and componentWillUnmount
  useEffect(() => {
    //Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  }, [lname]);

  const onClick = () => {
    Mobx.setName(fname, lname);
  };

  const onChangeFirstname = e => {
    console.log("e :", e.target);
    let fname = e.target.value;
    setfirstName(fname);
  };

  const onChangeLastname = e => {
    let lname = e.target.value;
    setLastname(lname);
  };

  return (
    <Observer>
      {() => (
        <div>
          <h1>Change your name.</h1>
          <h3>
            Name Props: {fname} {lname}
          </h3>
          <h3>
            Name MobX: {Mobx.fname} {Mobx.lname}
          </h3>
          <form>
            <input
              id="fname"
              name="firstname"
              placeholder="Firstname"
              value={fname}
              onChange={onChangeFirstname}
              style={{ margin: "5px" }}
            />
            <input
              id="lname"
              name="lastname"
              placeholder="Lastname"
              value={lname}
              onChange={onChangeLastname}
              style={{ margin: "5px" }}
            />
            <button type="button" onClick={onClick} style={{ margin: "5px" }}>
              Update MobX
            </button>
          </form>
        </div>
      )}
    </Observer>
  );
};
