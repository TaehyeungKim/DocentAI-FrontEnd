import React, {
  useState,
  useDeferredValue,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import { Send, Copy, Refresh } from "@/assets/icons";
import AIProfile from "@/assets/icons/aiChat.png";
import RecursiveFloatingContainer from "../RecursiveFloating";

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
        ></textarea>
        <button className="w-icon absolute top-0 right-4 h-full items-center flex">
          {Send()}
        </button>
      </div>
    </footer>
  );
}

type ChatData = {
  id: number;
  message: string;
  self: boolean;
};

export function ChatMain() {
  const [chatData, setChatData] = useState<ChatData[]>([]);
  const [id, setId] = useState(0);

  // useEffect(() => {
  //   setInterval(() => setId((id) => id + 1), 1000);
  // }, []);

  // useEffect(() => {
  //   setChatData([...chatData, { id, message: "adadad", self: false }]);
  // }, [id]);

  return (
    <main className="grow overflow-scroll p-7">
      <>
        {chatData.map((data) => (
          <RecursiveFloatingContainer
            floating="chatFloating"
            key={data.self ? `question_${data.id}` : `answer_${data.id}`}
          >
            <ChatContainer chatData={data} />
          </RecursiveFloatingContainer>
        ))}
      </>
    </main>
  );
}

interface ChatBubbleProps {
  data: ChatData;
  children?: JSX.Element;
}

function ChatBubble({ data, children }: ChatBubbleProps) {
  return (
    <div className={`w-fit max-w-[70%] ${data.self ? "ml-auto" : "mr-auto"}`}>
      <div
        className={`px-7 py-[10px] min-h-[40px] rounded-[25px] flex items-center box-border text-regular break-words ${
          data.self
            ? "rounded-tr-none bg-primary text-white text-right "
            : "rounded-tl-none bg-chatbubble"
        }`}
      >
        {data.message}
      </div>
      {children}
    </div>
  );
}

interface ChatContainerProps {
  chatData: ChatData;
}

function ChatContainer({ chatData }: ChatContainerProps) {
  return (
    <section className={`block mb-5`}>
      {chatData.self ? (
        <ChatBubble data={chatData} />
      ) : (
        <div className="flex gap-2">
          <div className="rounded-full aspect-square overflow-hidden w-icon h-fit -translate-y-2">
            <img src={AIProfile} />
          </div>
          <ChatBubble data={chatData}>
            <>
              <div className="flex justify-end gap-2 mt-2 mr-3">
                <button className="w-icon-sm aspect-square">{Copy()}</button>
                <button className="w-icon-sm aspect-square">{Refresh()}</button>
              </div>

              <RecursiveFloatingContainer
                floating="subQuestionFloating"
                className="flex flex-wrap gap-2 mt-4"
              >
                <>
                  <ChatSubQuestions question="adadada" />
                  <ChatSubQuestions question="adadada" />
                  <ChatSubQuestions question="adadada" />
                  <ChatSubQuestions question="adadada" />
                  <ChatSubQuestions question="adadada" />
                </>
              </RecursiveFloatingContainer>
            </>
          </ChatBubble>
        </div>
      )}
    </section>
  );
}

interface ChatSubQuestionsProps {
  question: string;
}

function ChatSubQuestions({ question }: ChatSubQuestionsProps) {
  return (
    <button className="block box-border min-h-[33px] py-[3px] px-4 border-[1px] border-primary text-center text-primary rounded-[18px] hover:bg-primary hover:text-white transition-colors ">
      {question}
    </button>
  );
}
