import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <input className="input" placeholder="Task To Be Done..." type="text" />
      <button className="btn_color">Add</button>
    </div>
  );
};

export default Header;
