import React from "react";

interface FrameProps {
  children: JSX.Element;
}

export default function Frame({ children }: FrameProps) {
  return (
    <div className="w-screen bg-primary">
      <main className="max-w-frame-width w-full h-screen  mx-auto bg-white">
        {children}
      </main>
    </div>
  );
}
