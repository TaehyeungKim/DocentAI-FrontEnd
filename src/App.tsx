import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/routes/Landing/index";
import Chat from "@/routes/Chat";
import Frame from "@/layout/frame";
import Main from "./routes/Main";
import Search from "@/routes/Search";
import { RecoilRoot } from "recoil";
import { SupabaseAuthProvider } from "./supabase";

function App() {
  return (
    <SupabaseAuthProvider>
      <RecoilRoot>
        <Frame>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={Landing} />
              <Route path="/chat/:exhibitionId/:pieceId" Component={Chat} />
              <Route path="/main" Component={Main} />
              <Route path="/search/:exhibitionId" Component={Search} />
            </Routes>
          </BrowserRouter>
        </Frame>
      </RecoilRoot>
    </SupabaseAuthProvider>
  );
}

export default App;
