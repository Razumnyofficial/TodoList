import "./tasks.css";

const Tasks = ({ info, setInfo, removeItem }) => {
  return (
    <div className="datainfo">
      {info.map((item, index) => (
        <div key={index} className="item-container">
          <div className="title">
            <input
              className="input_check"
              defaultChecked={item.checked}
              type="checkbox"
              onChange={(e) => {
                info[index].checked = !info[index].checked;
                setInfo([...info]);
                return !e.target.checked;
              }}
            />
            <span className={`info_items ${item.checked ? "checked" : ""}`}>
              {item.name}
            </span>
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
              <button
                className="iconsbtndelete"
                onClick={() => removeItem(item.id)}
              >
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
