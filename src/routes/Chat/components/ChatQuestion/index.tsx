import { ChatQuestionContainerProps } from "@/routes/Chat/components/type";
import ChatBubble from "@/routes/Chat/components/ChatBubble";

export default function ChatQuestionContainer({
  question,
}: ChatQuestionContainerProps) {
  return (
    <section className={`block mb-7`}>
      <ChatBubble data={question} />
    </section>
  );
}
