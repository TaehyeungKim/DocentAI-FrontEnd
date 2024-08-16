export type ChatData = {
  id: number;
  message: string;
  self: boolean;
  //if this chat is answer ('self' is false)
  for?: number;
};
