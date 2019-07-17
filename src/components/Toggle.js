import React, { useState, useEffect } from "react";
import { Observer } from "mobx-react";
import Mobx from "../mobx/Mobx";

export const Toggle = ({ _name, _count, _getTitle }) => {
  //Declare a new state variable
  const [count, setCount] = useState(_count); // this.state = { count: 0 } => setCount = this.setState({ count: })
  const [name, setName] = useState(_name);
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  const [title, setTitle] = useState(_getTitle);

  //Similar to componentDidMount and componentDisUpdate
  useEffect(() => {
    //Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  }, [count]);

  const onClick = () => {
    Mobx.increment();
    setCount(count + 1);
    setName("Yupin");
  };

  return (
    <Observer>
      {() => (
        <div>
          <h1>{title}</h1>
          <p>This's name from MobX: {Mobx.name}</p>
          <p>This's conut from MobX: {Mobx.count}</p>
          <p>This's title from MobX: {Mobx.title}</p>
          <button style={{ fontSize: 30 }} onClick={() => onClick()}>
            {Mobx.getName} {`Count hook: ${Mobx.getCount}`}{" "}
            {console.log("count :", count)}
          </button>
        </div>
      )}
    </Observer>
  );
};
