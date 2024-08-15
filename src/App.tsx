import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/routes/Landing/index";
import Frame from "@/layout/frame";

function App() {
  return (
    <Frame>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Landing} />
        </Routes>
      </BrowserRouter>
    </Frame>
  );
}

export default App;
