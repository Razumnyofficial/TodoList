import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TitleTasks from "./components/TitileTask";
import { INFOTASKS } from "./components/data/infotasks";

import "./app.css";

function App() {
  const [inputName, setInputName] = useState("");
  const [info, setInfo] = useState(INFOTASKS);

  function removeItem(id) {
    let resultItem = info.filter((item) => item.id !== id);
    setInfo(resultItem);
  }

  return (
    <div className="App">
      <div className="backgroundapp">
        <Header
          inputName={inputName}
          setInputName={setInputName}
          info={info}
          setInfo={setInfo}
        />
        <TitleTasks info={info} setInfo={setInfo} />
        <Tasks info={info} setInfo={setInfo} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
