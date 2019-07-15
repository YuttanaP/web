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
    setName("Hello World");
  };

  return <Observer>{() => <h1>Hello {name} Wellcome to MobX</h1>}</Observer>;
};
