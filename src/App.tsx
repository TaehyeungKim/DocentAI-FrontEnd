import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/routes/Landing/index";
import Chat from "@/routes/Chat";
import Frame from "@/layout/frame";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Frame>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Landing} />
            <Route path="/chat" element={<Chat title={"이건희 컬렉션"} />} />
          </Routes>
        </BrowserRouter>
      </Frame>
    </RecoilRoot>
  );
}

export default App;
