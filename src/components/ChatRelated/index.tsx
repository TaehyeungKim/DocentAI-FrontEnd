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

export function ChatMain() {
  return (
    <main className="grow overflow-scroll p-7">
      <ChatContainer
        chatInfo={{
          message: "adadadad",
          self: true,
        }}
      />

      <ChatContainer
        chatInfo={{
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit ex, ultricies sed est et, dignissim tempor lorem. Integer maximus ac quam accumsan vestibulum. In et rhoncus nisi, eget luctus erat. Phasellus vel semper dui. Donec non ipsum sed eros ultricies elementum ac sollicitudin ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean euismod mi quis tempor lobortis. Aliquam non dolor turpis. Duis fermentum eros pulvinar laoreet pulvinar. Etiam nec mollis lectus. Aliquam purus lorem, venenatis vel euismod vitae, laoreet eget purus. Sed maximus at eros et lacinia. Fusce posuere augue ut erat varius varius.",
          self: true,
        }}
      />
      <ChatContainer
        chatInfo={{
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit ex, ultricies sed est et, dignissim tempor lorem. Integer maximus ac quam accumsan vestibulum. In et rhoncus nisi, eget luctus erat. Phasellus vel semper dui. Donec non ipsum sed eros ultricies elementum ac sollicitudin ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean euismod mi quis tempor lobortis. Aliquam non dolor turpis. Duis fermentum eros pulvinar laoreet pulvinar. Etiam nec mollis lectus. Aliquam purus lorem, venenatis vel euismod vitae, laoreet eget purus. Sed maximus at eros et lacinia. Fusce posuere augue ut erat varius varius.",
          self: false,
        }}
      />
    </main>
  );
}

interface ChatBubbleProps {
  message: string;
  self: boolean;
  children?: JSX.Element;
}

type ChatInfo = Omit<ChatBubbleProps, "children">;

function ChatBubble({ message, self, children }: ChatBubbleProps) {
  return (
    <div className={`w-fit max-w-[70%] ${self ? "ml-auto" : "mr-auto"}`}>
      <div
        className={`px-7 py-[10px] min-h-[40px] rounded-[25px] flex items-center box-border text-regular break-words ${
          self
            ? "rounded-tr-none bg-primary text-white text-right "
            : "rounded-tl-none bg-chatbubble"
        }`}
      >
        {message}
      </div>
      {children}
    </div>
  );
}

interface ChatContainerProps {
  chatInfo: ChatInfo;
}

function ChatContainer({ chatInfo }: ChatContainerProps) {
  return (
    <section className={`block mb-5`}>
      {chatInfo.self ? (
        <ChatBubble {...chatInfo} />
      ) : (
        <div className="flex gap-2">
          <div className="rounded-full aspect-square overflow-hidden w-icon h-fit -translate-y-2">
            <img src={AIProfile} />
          </div>
          <ChatBubble {...chatInfo}>
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
