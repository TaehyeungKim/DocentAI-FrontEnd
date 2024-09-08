import { LandingEllipses } from "@/components/LandingRelated";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RecursiveFloatingContainer from "@/components/RecursiveFloating";

export default function Landing() {
  const navigate = useNavigate();

  // 5초 후 메인 페이지로 이동하도록 했어유
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative bg-gradient-to-b from-white to-gradient-end w-full h-full flex flex-col items-center justify-center">
      <LandingBackground />
      <LandingTitle />
    </div>
  );
}

function LandingTitle() {
  return (
    <div className="text-center text-primary">
      <RecursiveFloatingContainer floating="titleFloating">
        <>
          <h5 className="font-large text-large ">내 손안의 도슨트</h5>
          <h1 className="font-largest text-largest">DocentAI</h1>
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
