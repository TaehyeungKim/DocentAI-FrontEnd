import { ChatAnswerContainerProps } from "../type";
import AIProfile from "@/assets/icons/aiChat.png";
import RecursiveFloatingContainer from "@/components/RecursiveFloating";
import ChatBubble from "../ChatBubble";
import { Copy, Refresh } from "@/assets/icons";
import ChatSubQuestion from "@/components/ChatRelated/ChatSubQuestion";

export default function ChatAnswerContainer({
  answer,
}: ChatAnswerContainerProps) {
  return (
    <section className={`block mb-7`}>
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

export function AnswerPending() {
  return (
    <RecursiveFloatingContainer
      floating="chatPendingFloating"
      className="inline-flex flex-row w-full max-w-[5.4rem] gap-[0.2rem]"
      initial="inherit"
    >
      <>
        <div className="rounded-full bg-black aspect-square grow "></div>
        <div className="rounded-full bg-black aspect-square grow "></div>
        <div className="rounded-full bg-black aspect-square grow "></div>
      </>
    </RecursiveFloatingContainer>
  );
}
