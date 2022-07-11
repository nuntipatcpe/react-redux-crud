import logo from "./logo.svg";
import Postform from "./components/Postform";
import "./App.css";

function App() {
  return (
    <div className="bg-app">
      <nav className="navbar">
        <div>Post</div>
      </nav>
      <Postform />
    </div>
  );
}

export default App;
