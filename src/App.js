import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TitleTasks from "./components/TitileTask";

function App() {
  return (
    <div className="App">
      <Header />
      <TitleTasks />
      <Tasks />
    </div>
  );
}

export default App;
