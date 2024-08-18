import { Submitter } from "./wrapper";

export type ChatData = {
  id: number;
  question?: ChatQuestion;
  answer?: ChatAnswer;
};

export type ChatType = "question" | "answer";

type ChatNode<T extends ChatType> = {
  type: T;
  id: number;
};

export type ChatQuestion = ChatNode<"question"> & {
  question: string;
};

export type ChatAnswer = ChatNode<"answer"> & {
  answer: string;
  sub?: string[];
};

//rendering

export interface WrapperInnerFormInterface {
  submit: Submitter;
}

export interface ChatSubmitComponentProps extends WrapperInnerFormInterface {}

export interface ChatInputFormProps extends ChatSubmitComponentProps {}

export interface ChatBubbleProps {
  data: ChatQuestion | ChatAnswer;
  children?: JSX.Element;
}

export interface ChatQuestionContainerProps {
  question: ChatQuestion;
}

export interface ChatAnswerContainerProps {
  answer: ChatAnswer;
}

export interface ChatSubQuestionFormProps
  extends ChatSubmitComponentProps,
    ChatSubQuestionProps {
  question: string;
}

export interface ChatSubQuestionProps {
  question: string;
}
