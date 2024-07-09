import MainPage from "./MainPage/MainPage"
import SuccesMessage from "./Succes/Succes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/success" element={<SuccesMessage />} />
      </Routes>
    </Router>
  )
}

export default App
