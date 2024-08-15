import React from "react";

interface FrameProps {
  children: JSX.Element;
}

export default function Frame({ children }: FrameProps) {
  return (
    <div className="w-screen bg-white">
      <main className="max-w-frame-width w-full h-screen  mx-auto">
        {children}
      </main>
    </div>
  );
}
