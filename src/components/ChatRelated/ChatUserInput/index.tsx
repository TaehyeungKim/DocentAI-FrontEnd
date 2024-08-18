import { ChatInputFormProps } from "@/components/ChatRelated/type";

import {
  useState,
  useLayoutEffect,
  useRef,
  useDeferredValue,
  useEffect,
} from "react";
import { Send } from "@/assets/icons";

import { SubmitWrapper } from "@/components/ChatRelated/wrapper";

function ChatInputForm({ submit }: ChatInputFormProps) {
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
    <footer className="flex items-center justify-center px-4 py-4">
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
          value={input}
        ></textarea>
        <button
          className="w-icon absolute top-0 right-4 h-full items-center flex"
          onClick={() => {
            if (!input) return;
            submit(input);
            setInput("");
          }}
        >
          {Send()}
        </button>
      </div>
    </footer>
  );
}

export default function ChatInput() {
  return (
    <SubmitWrapper<ChatInputFormProps> Form={ChatInputForm}></SubmitWrapper>
  );
}
