import { ChatQuestion } from "./type";
import { ChatAnswer, ChatData } from "@/components/ChatRelated/type";

export const SendQuestion = (data: ChatQuestion): Promise<ChatAnswer> => {
  //before connecting api
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          id: data.id,
          type: "answer",
          answer: "네. 이 작품은 ~~~하며 ~~~한 것이 특징입니다.",
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
