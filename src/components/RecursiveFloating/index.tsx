import { useRef, useEffect, useLayoutEffect, useCallback } from "react";

interface RecursiveFloatingContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: JSX.Element;
  floating: string;
  initial?: "visible" | "hidden" | "inherit";
}

export default function RecursiveFloatingContainer({
  children,
  floating,
  initial = "hidden",
  ...props
}: RecursiveFloatingContainerProps) {
  const container = useRef<HTMLDivElement>(null);

  const recursiveAttach = useCallback(
    (element: Element, attach: (element: Element) => void) => {
      attach(element);
      const next = element.nextElementSibling;
      if (next) recursiveAttach(next, attach);
    },
    []
  );

  useLayoutEffect(() => {
    const firstElement = container.current?.firstElementChild;

    if (firstElement) {
      recursiveAttach(firstElement, (element: Element) => {
        element.setAttribute("style", `visibility: ${initial}`);
        element.addEventListener("animationstart", () => {
          element.nextElementSibling?.removeAttribute("style");
          element.nextElementSibling?.classList.add(floating);
        });
      });
    }
  }, []);

  useEffect(() => {
    container.current?.firstElementChild?.removeAttribute("style");
    container.current?.firstElementChild?.classList.add(floating);
  }, [floating]);

  return (
    <div {...props} ref={container}>
      {children}
    </div>
  );
}
