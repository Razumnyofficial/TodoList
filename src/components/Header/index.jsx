import "./header.css";

const Header = ({ inputName, setInputName, info, setInfo }) => {
  console.log(info);
  return (
    <div className="header">
      <input
        className="input"
        placeholder="Task To Be Done..."
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button
        className="btn_color"
        onClick={() => {
          setInfo([{ name: inputName, checked: false }, ...info]);
          setInputName("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
