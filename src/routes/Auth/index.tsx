import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Auth() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");
    console.log(code);
  }, []);
  return <></>;
}
