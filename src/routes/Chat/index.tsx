import { ArrowBack, Edit } from "@/assets/icons";
import { ChatInput, ChatMain } from "@/components/ChatRelated";

interface ChatProps {
  title: string;
}

export default function Chat({ title }: ChatProps) {
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
