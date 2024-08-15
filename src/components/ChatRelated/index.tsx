import React, {
  useState,
  useDeferredValue,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import { Send } from "@/assets/icons";

export function ChatInput() {
  const [input, setInput] = useState<string>("");
  const [textareaStyle, setTextAreaStyle] = useState<React.CSSProperties>({
    maxHeight: "10vh",
  });

  const deferredTextareaStyle = useDeferredValue(textareaStyle);

  const textRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (textareaStyle.height === "auto")
      setTextAreaStyle({
        ...textareaStyle,
        height: textRef.current?.scrollHeight,
      });

    if (
      typeof textareaStyle.height === "number" &&
      typeof deferredTextareaStyle.height === "number"
    ) {
    }
  }, [textareaStyle]);

  useEffect(() => {
    const textareaHeight = textRef.current?.offsetHeight;

    if (textareaHeight)
      setTextAreaStyle({
        ...textareaStyle,
        borderRadius: `${textareaHeight / 2}px`,
        height: textareaHeight,
      });
  }, []);

  return (
    <footer className="flex items-center justify-center px-4 pb-7">
      <div className="w-[90%] relative">
        <textarea
          ref={textRef}
          className=" border-box px-3 border-primary border-[1px]  h-[40px] py-chat-vertical-padding leading-chat placeholder:leading-chat w-full"
          placeholder="여기에 입력하세요."
          rows={1}
          style={textareaStyle}
          onChange={(e) => {
            setInput(e.target.value);
            if (e.target.offsetHeight !== e.target.scrollHeight) {
              setTextAreaStyle({ ...textareaStyle, height: "auto" });
            }
          }}
        ></textarea>
        <button className="w-icon absolute top-0 right-4 h-full items-center flex">
          {Send()}
        </button>
      </div>
    </footer>
  );
}

export function ChatMain() {
  return <main className="grow"></main>;
}
