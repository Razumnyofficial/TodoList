import { INFOTASKS } from "../data/infotasks";

import "./titletask.css";

const TitleTasks = () => {
  let countTrue = 0;
  let countFalse = 0;
  for (let i = 0; i < INFOTASKS.length; i++) {
    if (INFOTASKS[i].checked === true) {
      countTrue++;
    } else {
      countFalse++;
    }
  }
  return (
    <div className="title_tasks">
      <button className="tasks_btn">Все ({INFOTASKS.length})</button>
      <button className="tasks_btn">в работе ({countFalse})</button>
      <button className="tasks_btn">сделано ({countTrue})</button>
    </div>
  );
};

export default TitleTasks;
