import React from "react";
// import { INFOTASKS } from "../data/infotasks";
import { useState } from "react";

import "./titletask.css";
const TITLETASKS = [
  {
    id: 0,
    name: "Все",
  },
  {
    id: 1,
    name: "В работе",
  },
  {
    id: 2,
    name: "Сделано",
  },
];

// Чтобы определить колличсетво задач в скобках
const InfoTasks = ({ info, setInfo, changeTitleTrue }) => {
  let countTrue = 0;
  let countFalse = 0;
  for (let i = 0; i < info.length; i++) {
    if (info[i].checked === true) {
      countTrue++;
    } else {
      countFalse++;
    }
  }
  // const [countId, setCountId] = useState(TITLETASKS.id);
  // const [titleName, setTitleName] = useState(TITLETASKS);

  return (
    <div className="title_tasks">
      {/* //   {titleName.map((items) => ( */}
      {/* // <button className="tasks_btn">{items.name}</button>
      // ))} */}
      <button className="tasks_btn">все ({info.length}) </button>
      <button className="tasks_btn">в работе ({countFalse})</button>
      <button className="tasks_btn">завершено ({countTrue})</button>
    </div>
  );
};

export default InfoTasks;
