import { ChatQuestion } from "./type";
import { ChatAnswer } from "@/components/ChatRelated/type";
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.response.use((response) => {
  return response;
});

export const SendQuestion = (data: ChatQuestion): Promise<ChatAnswer> => {
  //before connecting api
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          id: data.id,
          type: "answer",
          answer: "네 이 작품은 ~~~~하고요 ~~~합니다.",

          sub: [
            "작가에 대해서 더 설명해줘",
            "이 작가의 다른 작품들도 그래?",
            "작품의 대표적인 특징이 뭐야?",
          ],
        }),
      2000
    );
  });
};
