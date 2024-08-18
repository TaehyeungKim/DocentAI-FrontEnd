import { ChatQuestionContainerProps } from "@/components/ChatRelated/type";
import ChatBubble from "@/components/ChatRelated/ChatBubble";

export default function ChatQuestionContainer({
  question,
}: ChatQuestionContainerProps) {
  return (
    <section className={`block mb-7`}>
      <ChatBubble data={question} />
    </section>
  );
}
