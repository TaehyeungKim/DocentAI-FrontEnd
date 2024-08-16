import { ArrowBack, Edit } from "@/assets/icons";
import { ChatInput, ChatMain } from "@/components/ChatRelated";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ChatTopicState,
  ChatOnTopicState,
  ChatTopicStateType,
  ChatStateType,
} from "@/state";
import { useEffect, useLayoutEffect } from "react";

interface ChatProps {
  title: string;
}

export default function Chat({ title }: ChatProps) {
  const [topic, setTopic] = useRecoilState<ChatTopicStateType>(ChatTopicState);

  const [chatOnTopicData, setChatOnTopicData] = useRecoilState<
    ChatStateType | undefined
  >(ChatOnTopicState);

  useEffect(() => {
    setTopic(title);
  }, []);

  useEffect(() => {
    if (topic && !chatOnTopicData)
      setChatOnTopicData({
        name: title,
        data: [{ id: 0, message: "adadadad", self: false }],
        marker: 0,
      });
  }, [topic]);

  useEffect(() => {
    console.log(chatOnTopicData);
  }, [chatOnTopicData]);

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
