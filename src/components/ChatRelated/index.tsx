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
import { ChatQuestion, ChatAnswer } from "./type";
import { useRecoilValue } from "recoil";
import { ChatStateType, ChatOnTopicState } from "@/state";
import { Submitter, SubmitWrapper } from "./wrapper";

export interface ChatSubmitComponentProps {
  submit: Submitter;
}

interface ChatInputFormProps extends ChatSubmitComponentProps {}

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

export function ChatMain() {
  const chatData = useRecoilValue<ChatStateType | undefined>(ChatOnTopicState);

  return (
    <main className="grow overflow-scroll p-7">
      <>
        {chatData?.data.map((data) => (
          <RecursiveFloatingContainer
            floating="chatFloating"
            key={`chat_${data.id}`}
          >
            <>
              {data.question && (
                <ChatQuestionContainer question={data.question} />
              )}
              {data.answer && <ChatAnswerContainer answer={data.answer} />}
            </>
          </RecursiveFloatingContainer>
        ))}
      </>
    </main>
  );
}

interface ChatBubbleProps {
  data: ChatQuestion | ChatAnswer;
  children?: JSX.Element;
}

function ChatBubble({ data, children }: ChatBubbleProps) {
  return (
    <div
      className={`w-fit max-w-[70%] ${
        data.type === "question" ? "ml-auto" : "mr-auto"
      }`}
    >
      <div
        className={`px-7 py-[10px] min-h-[40px] rounded-[25px] flex items-center box-border text-regular break-words ${
          data.type === "question"
            ? "rounded-tr-none bg-primary text-white text-right "
            : "rounded-tl-none bg-chatbubble"
        }`}
      >
        {data.type === "question" ? data.question : data.answer}
      </div>
      {children}
    </div>
  );
}

interface ChatQuestionContainerProps {
  question: ChatQuestion;
}

function ChatQuestionContainer({ question }: ChatQuestionContainerProps) {
  return (
    <section className={`block mb-5`}>
      <ChatBubble data={question} />
    </section>
  );
}

interface ChatAnswerContainerProps {
  answer: ChatAnswer;
}

function ChatAnswerContainer({ answer }: ChatAnswerContainerProps) {
  return (
    <section className={`block mb-5`}>
      <div className="flex gap-2">
        <div className="rounded-full aspect-square overflow-hidden w-icon h-fit -translate-y-2">
          <img src={AIProfile} />
        </div>
        <ChatBubble data={answer}>
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
                {answer.sub?.map((q) => (
                  <ChatSubQuestion key={q} question={q} />
                ))}
              </>
            </RecursiveFloatingContainer>
          </>
        </ChatBubble>
      </div>
    </section>
  );
}

export interface ChatSubQuestionFormProps extends ChatSubmitComponentProps {
  question: string;
}

function ChatSubQuestionForm({ question, submit }: ChatSubQuestionFormProps) {
  return (
    <button
      className="block box-border min-h-[33px] py-[3px] px-4 border-[1px] border-primary text-center text-primary rounded-[18px] hover:bg-primary hover:text-white transition-colors"
      onClick={() => {
        submit(question);
      }}
    >
      {question}
    </button>
  );
}

interface ChatSubQuestionProps {
  question: string;
}

function ChatSubQuestion({ question }: ChatSubQuestionProps) {
  return (
    <SubmitWrapper<ChatSubQuestionFormProps>
      Form={ChatSubQuestionForm}
      props={{ question, submit: (input: string) => {} }}
    ></SubmitWrapper>
  );
}

export function ChatInput() {
  return (
    <SubmitWrapper<ChatInputFormProps>
      Form={ChatInputForm}
      props={{ submit: (input: string) => {} }}
    ></SubmitWrapper>
  );
}
