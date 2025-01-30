import { ChatInputFormProps } from "@/routes/Chat/components/type";

import { useState } from "react";
import { Send } from "@/assets/icons";

import { SubmitWrapper } from "@/routes/Chat/components/wrapper";
import { ScrollInput } from "@/components/Input";

function ChatInputForm({ submit }: ChatInputFormProps) {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (value: string) => setInput(value);

  return (
    <footer className="flex items-center justify-center px-4 py-4">
      <div className="w-[90%] relative">
        <ScrollInput
          placeholder="여기에 입력하세요"
          onInputChange={handleInputChange}
          inputValue={input}
        ></ScrollInput>
        <button
          className="w-icon absolute top-0 right-4 h-full items-center flex"
          onClick={() => {
            if (!input) return;
            submit(input);
            setInput("");
          }}
        >
          {Send()}
        </button>
      </div>
    </footer>
  );
}

export default function ChatInput() {
  return (
    <SubmitWrapper<ChatInputFormProps> Form={ChatInputForm}></SubmitWrapper>
  );
}
