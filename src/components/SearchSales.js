import React, { useState, useEffect } from "react";
import { Observer } from "mobx-react";
import Mobx from "../mobx/Mobx";

export const SearchSales = (props, { _name, _count }) => {
  console.log("props :", props);
  const [count, setCount] = useState(_count); // this.state = { count: 0 } => setCount = this.setState({ count: })
  const [name, setName] = useState(_name);

  useEffect(() => {}, [count]);

  const onClick = () => {
    Mobx.increment();
    setCount(count + 1);
    setName("Emba");
  };

  return (
    <Observer>
      {() => (
        <div>
          <h1>Hello {name} Wellcome to MobX</h1>
          <form>
            <input id="saleNo" name="saleNumber" placeholder="BKK-00000" />
            <button type="button" onClick={onClick}>
              Search
            </button>
          </form>
        </div>
      )}
    </Observer>
  );
};
