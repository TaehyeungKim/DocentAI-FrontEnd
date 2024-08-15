import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/routes/Landing/index";
import Chat from "@/routes/Chat";
import Frame from "@/layout/frame";

function App() {
  return (
    <Frame>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/chat" element={<Chat title={"이건희 컬렉션"} />} />
        </Routes>
      </BrowserRouter>
    </Frame>
  );
}

export default App;
