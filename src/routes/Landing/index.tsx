import {
  LandingEllipses,
  LandingLoginButtons,
} from "@/components/LandingRelated";
import { useEffect, useRef } from "react";

import RecursiveFloatingContainer from "@/components/RecursiveFloating";
import { useSupabase } from "@/supabase/useSupabase";
import { Session } from "@supabase/supabase-js";
import { instance } from "@/api/api";
import { useNavigate } from "react-router-dom";

const handleSession = async (session: Session) => {
  const { access_token, refresh_token } = session;
  try {
    await instance.get("/api/v1/user/kakao/callback", {
      params: {
        access_token,
        refresh_token,
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    throw new Error("세션 이상");
  }
};

export default function Landing() {
  const { client, session } = useSupabase();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      handleSession(session).then((res) => {
        navigate("/main");
      });
    }
  }, [session]);

  return (
    <div className="relative bg-gradient-to-b from-white to-gradient-end w-full h-full flex flex-col items-center justify-center">
      <LandingBackground />
      <LandingContent />
    </div>
  );
}

function LandingContent() {
  return (
    <div className="text-center text-primary">
      <RecursiveFloatingContainer floating="titleFloating">
        <>
          <h5 className="font-large text-large ">내 손안의 도슨트</h5>
          <h1 className="font-largest text-largest">DocentAI</h1>
          <LandingLogin />
        </>
      </RecursiveFloatingContainer>
    </div>
  );
}

function LandingBackground() {
  const bgFrame = useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-full h-full absolute top-0 left-0 overflow-hidden"
      ref={bgFrame}
    >
      <RecursiveFloatingContainer floating="ellipseFloating">
        <>
          <LandingEllipses className="w-ellipse-sm border-third top-[25px] -left-[112px]" />
          <LandingEllipses className="w-ellipse-base border-primary -top-[74px] -left-[87px]" />
          <LandingEllipses className="w-ellipse-base border-primary top-[120px] -right-[87px]" />
          <LandingEllipses className="w-ellipse-sm border-primary -bottom-[100px] right-[10px]" />
          <LandingEllipses className="w-ellipse-base border-primary bottom-[140px] -left-[100px]" />
          <LandingEllipses className="w-ellipse-sm border-third top-[57px] -right-[75px]" />
          <LandingEllipses className="w-ellipse-sm border-third bottom-[120px] left-[17px]" />
          <LandingEllipses className="w-ellipse-base border-third -bottom-[80px] -right-[80px]" />
        </>
      </RecursiveFloatingContainer>
    </div>
  );
}

function LandingLogin() {
  return (
    <div className="absolute bottom-9 left-0 w-frame-width flex justify-center">
      <LandingLoginButtons></LandingLoginButtons>
    </div>
  );
}
