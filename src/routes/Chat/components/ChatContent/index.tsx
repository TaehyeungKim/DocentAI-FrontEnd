import { useRecoilValue } from "recoil";
import RecursiveFloatingContainer from "@/components/RecursiveFloating";
import { ChatStateType, ChatOnTopicState } from "@/state";
import { ChatQuestion, ChatAnswer } from "..";

export default function ChatMain() {
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
              {data.question && <ChatQuestion question={data.question} />}
              {data.answer && <ChatAnswer answer={data.answer} />}
            </>
          </RecursiveFloatingContainer>
        ))}
      </>
    </main>
  );
}
