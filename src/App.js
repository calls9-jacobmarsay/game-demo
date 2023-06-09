import GameDetail from "./pages/GameDetails";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<GameDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
