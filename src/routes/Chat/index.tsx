import { ArrowBack, Edit } from "@/assets/icons";
import { ChatInput, ChatMain } from "@/components/ChatRelated";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ChatTopicState,
  ChatOnTopicState,
  ChatTopicStateType,
  ChatStateType,
  ChatState,
} from "@/state";
import { useEffect } from "react";

interface ChatProps {
  title: string;
}

export default function Chat({ title }: ChatProps) {
  const [topic, setTopic] = useRecoilState<ChatTopicStateType>(ChatTopicState);

  const [allChatData, setAllChatData] =
    useRecoilState<ChatStateType[]>(ChatState);

  const [chatOnTopicData, setChatOnTopicData] = useRecoilState<
    ChatStateType | undefined
  >(ChatOnTopicState);

  useEffect(() => {
    setTopic(title);
  }, []);

  useEffect(() => {
    if (topic && !chatOnTopicData)
      setAllChatData([
        ...allChatData,
        {
          name: title,
          data: [
            {
              id: 0,
              message: `${title}에 오신 것을 환영합니다.`,
              self: false,
              sub: [
                "작품 설명해줘",
                "작가 설명해줘",
                "비슷한 작품 추천해줘",
                "감상 써줘",
                "너는 어떤 기능들이 있어?",
              ],
            },
          ],
          marker: 0,
        },
      ]);
  }, [topic]);

  return (
    <div className="flex flex-col h-screen">
      <header className=" flex flex-row py-3 px-5 items-center shadow-chat-header">
        <button className="w-icon aspect-square">{ArrowBack()}</button>
        <h3 className="text-primary text-semi-large ml-3 font-bold">{title}</h3>
        <button className="w-icon aspect-square ml-auto">{Edit()}</button>
      </header>
      <ChatMain />
      <ChatInput />
    </div>
  );
}
