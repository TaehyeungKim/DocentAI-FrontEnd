import { atom, selector } from "recoil";
import type { ChatData } from "./components/ChatRelated/type";

export type ChatStateType = {
  name: string;
  data: ChatData[];
  marker: number;
};

export type ChatTopicStateType = string;

export const ChatState = atom<ChatStateType[]>({
  key: "chatState",
  default: [],
});

export const ChatTopicState = atom<ChatTopicStateType>({
  key: "chatTopicState",
  default: "",
});

export const ChatOnTopicState = selector<ChatStateType | undefined>({
  key: "chatOnTopic",
  get: ({ get }) => {
    const chatAll = get(ChatState);
    const topic = get(ChatTopicState);

    return chatAll.find((data) => data.name === topic);
  },
  set: ({ set, get }, data) => {
    const topic = get(ChatTopicState);
    const old = get(ChatState);
    set(ChatState, [...get(ChatState), data as ChatStateType]);
  },
});
