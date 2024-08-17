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
