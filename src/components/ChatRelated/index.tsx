import React, {
  useState,
  useDeferredValue,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import { Send, Copy, Refresh } from "@/assets/icons";
import AIProfile from "@/assets/icons/aiChat.png";
import RecursiveFloatingContainer from "../RecursiveFloating";
import { ChatData } from "./type";
import { useRecoilState, useRecoilValue } from "recoil";
import { ChatStateType, ChatOnTopicState } from "@/state";
import { SendQuestion } from "@/api/api";

export function ChatInput() {
  const [input, setInput] = useState<string>("");
  const [textareaStyle, setTextAreaStyle] = useState<React.CSSProperties>({
    maxHeight: "10vh",
  });

  const [chatOnTopicData, setChatOnTopicData] = useRecoilState<
    ChatStateType | undefined
  >(ChatOnTopicState);

  const deferredTextareaStyle = useDeferredValue(textareaStyle);

  const [tempResponseStore, setTempResponseStore] = useState<ChatData | null>(
    null
  );

  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (tempResponseStore && chatOnTopicData) {
      setChatOnTopicData({
        ...chatOnTopicData,
        data: [...chatOnTopicData.data, tempResponseStore],
      });
      setTempResponseStore(null);
    }
  }, [tempResponseStore]);

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
            if (chatOnTopicData) {
              setChatOnTopicData({
                ...chatOnTopicData,
                marker: chatOnTopicData.marker + 1,
                data: [
                  ...chatOnTopicData.data,
                  {
                    id: chatOnTopicData.marker + 1,
                    message: input,
                    self: true,
                  },
                ],
              });
              SendQuestion({
                id: chatOnTopicData.marker + 1,
                message: input,
              }).then((response) => setTempResponseStore(response));
            }
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
                  {chatData.sub?.map((q) => (
                    <ChatSubQuestions key={q} question={q} />
                  ))}
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
  const [chatOnTopicData, setChatOnTopicData] = useRecoilState<
    ChatStateType | undefined
  >(ChatOnTopicState);

  const [tempResponseStore, setTempResponseStore] = useState<ChatData | null>(
    null
  );

  useEffect(() => {
    if (tempResponseStore && chatOnTopicData)
      setChatOnTopicData({
        ...chatOnTopicData,
        data: [...chatOnTopicData.data, tempResponseStore],
      });
  }, [tempResponseStore]);

  return (
    <button
      className="block box-border min-h-[33px] py-[3px] px-4 border-[1px] border-primary text-center text-primary rounded-[18px] hover:bg-primary hover:text-white transition-colors"
      onClick={() => {
        if (chatOnTopicData) {
          setChatOnTopicData({
            ...chatOnTopicData,
            marker: chatOnTopicData.marker + 1,
            data: [
              ...chatOnTopicData.data,
              {
                id: chatOnTopicData.marker + 1,
                message: question,
                self: true,
              },
            ],
          });
          SendQuestion({
            id: chatOnTopicData.marker + 1,
            message: question,
          }).then((response) => setTempResponseStore(response));
        }
      }}
    >
      {question}
    </button>
  );
}
