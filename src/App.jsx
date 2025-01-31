import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TitleTasks from "./components/TitileTask";

import "./app.css";

function App() {
  const [inputName, setInputName] = useState("");
  // const [info, setInfo] = useState(INFOTASKS);
  const [filterParams, setFilterParams] = useState(null);
  const [error, setError] = useState(); // состояние ошибки
  const [TasksData, setTasksData] = useState([]); // получение и состояние данных

  //Get запрос
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

  // POST

  const addTask = async () => {
    if (!inputName.trim()) return;

    const newTask = {
      title: inputName,
      isDone: false,
    };

    try {
      const response = await fetch("https://easydev.club/api/v1/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Failed add Task");
      }

      const resData = await response.json();
      setTasksData((prevTask) => [resData.data, ...prevTask]);
      setInputName("");
    } catch (error) {
      console.error(error);
    }
  };

  if (error) {
    return <h1>Ошибка обработки данных |{error.message}</h1>;
  }

  return (
    <div className="App">
      <div className="backgroundapp">
        <Header
          inputName={inputName}
          setInputName={setInputName}
          addTask={addTask}
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
