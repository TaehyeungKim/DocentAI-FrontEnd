import { ChatSubQuestionFormProps } from "@/components/ChatRelated/type";
import { SubmitWrapper } from "@/components/ChatRelated/wrapper";

function ChatSubQuestionForm({ question, submit }: ChatSubQuestionFormProps) {
  return (
    <button
      className="block box-border min-h-[33px] py-[3px] px-4 border-[1px] border-primary text-center text-primary rounded-[18px] hover:bg-primary hover:text-white transition-colors"
      onClick={() => {
        submit(question);
      }}
    >
      {question}
    </button>
  );
}

interface ChatSubQuestionProps {
  question: string;
}

export default function ChatSubQuestion({ question }: ChatSubQuestionProps) {
  return (
    <SubmitWrapper<ChatSubQuestionFormProps>
      Form={ChatSubQuestionForm}
      props={{ question }}
    ></SubmitWrapper>
  );
}
