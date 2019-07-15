import React, { useState, useEffect } from "react";
import { Observer } from "mobx-react";
import Mobx from "../mobx/Mobx";

export const Toggle = (props,{ _name, _count }) => {
    console.log(props);
  const [count, setCount] = useState(_count); // this.state = { count: 0 } => setCount = this.setState({ count: })
  const [name, setName] = useState(_name);

  useEffect(() => {}, [count]);

  const onClick = () => {
    Mobx.increment();
    setCount(count + 1);
    setName("Hello World");
  };

  return (
    <Observer>
      {() => (
        <button style={{ fontSize: 30 }} onClick={() => onClick()}>
          {name} {`count hook: ${count}`}
        </button>
      )}
    </Observer>
  );
};


