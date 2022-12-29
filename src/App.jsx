import Header from "./Component/Header/Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
