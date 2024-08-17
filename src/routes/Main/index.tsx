import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/chat")}>채팅으로</button>;
}
