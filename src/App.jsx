import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TitleTasks from "./components/TitileTask";
import { INFOTASKS } from "./components/data/infotasks";

import "./app.css";

function App() {
  const [inputName, setInputName] = useState("");
  // const [info, setInfo] = useState(INFOTASKS);
  const [filterParams, setFilterParams] = useState(null);
  const [error, setError] = useState(); // состояние ошибки
  const [TasksData, setTasksData] = useState([]); // получение и состояние данных

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://easydev.club/api/v1/todos");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setTasksData(resData.data);
      } catch (error) {
        setError({
          message: error.message || "Could not fetch data, please try again", //тут не выводится(разобраться)
        });
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <h1>Ошибка обработки данных |{error.message}</h1>;
  }

  // useEffect(() => {
  //   fetch("https://easydev.club/api/v2/todos")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       setTasksData(resData.data);
  //     });
  // }, []);

  // function removeItem(id) {
  //   let resultItem = info.filter((item) => item.id !== id);
  //   setInfo(resultItem);
  // }

  return (
    <div className="App">
      <div className="backgroundapp">
        <Header
          inputName={inputName}
          setInputName={setInputName}
          info={TasksData}
          // setInfo={setInfo}
        />
        <TitleTasks
          info={TasksData}
          // setInfo={setInfo}
          setFilterParams={setFilterParams}
        />
        <Tasks
          info={TasksData}
          // setInfo={setInfo}
          // removeItem={removeItem}
          filterParams={filterParams}
        />
      </div>
    </div>
  );
}

export default App;
