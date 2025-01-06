import "./tasks.css";
import { useState } from "react";
import { INFOTASKS } from "../data/infotasks";

// const ITEMS = [
//   {
//     id: 1,
//     name: "review files",
//     checked: true,
//   },
//   {
//     id: 2,
//     name: "edit video",
//     checked: true,
//   },
//   {
//     id: 3,
//     name: "attend linch",
//     checked: false,
//   },
//   {
//     id: 4,
//     name: "buy groceries",
//     checked: false,
//   },
//   {
//     id: 5,
//     name: "buy tickets",
//     checked: false,
//   },
// ];
// console.log(INFOTASKS);

const Tasks = () => {
  const [info, setInfo] = useState(INFOTASKS);
  function handleChange() {
    setInfo(!info);
  }
  console.log(info);
  return (
    <div className="datainfo">
      {INFOTASKS.map((items) => (
        <div key={items.id} className="item-container">
          <div className="title">
            <input
              className="input_check"
              checked={info.checked}
              onClick={() => handleChange()}
              type="checkbox"
            />
            <span className="info_items">{items.name}</span>
            <div className="icons_btn">
              <button className="iconsbtnedit">
                <img
                  className="btn_icons_edit"
                  src="/images/edit.png"
                  alt="edit"
                />
              </button>
            </div>
            <div className="icons_btn">
              <button className="iconsbtndelete">
                <img
                  className="btn_icons_delete"
                  src="/images/delete.png"
                  alt="delete"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
