import { ChatBubbleProps } from "@/components/ChatRelated/type";
import { AnswerPending } from "@/components/ChatRelated/ChatAnswer";
import RecursiveFloatingContainer from "@/components/RecursiveFloating";

export default function ChatBubble({ data, children }: ChatBubbleProps) {
  switch (data.type) {
    case "answer":
      if (data.answer === "")
        return (
          <div className={`max-w-[70%] w-20 mr-auto`}>
            <div
              className={`bubbleLayoutTemplate rounded-tl-none bg-chatbubble`}
            >
              <AnswerPending />
            </div>
          </div>
        );
      return (
        <RecursiveFloatingContainer
          floating="chatFloating"
          className={`w-fit max-w-[70%] mr-auto`}
        >
          <>
            <div className={`bubbleLayoutTemplate bubbleAnswerStyle`}>
              {data.answer}
            </div>
            {children}
          </>
        </RecursiveFloatingContainer>
      );
    default:
      return (
        <div className={`w-fit max-w-[70%] ml-auto`}>
          <div className={`bubbleLayoutTemplate bubbleQuestionStyle`}>
            {data.question}
          </div>
          {children}
        </div>
      );
  }
}
