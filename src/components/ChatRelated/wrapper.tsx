import { useState, useEffect, useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { ChatStateType, ChatOnTopicState } from "@/state";
import { ChatAnswer, ChatData, WrapperInnerFormInterface } from "./type";
import { SendQuestion } from "@/api/api";
import { ChatSubmitComponentProps } from "@/components/ChatRelated/type";

interface SubmitWrapperProps<T extends ChatSubmitComponentProps> {
  Form: ({ ...props }: T) => JSX.Element;
  props?: Omit<T, keyof WrapperInnerFormInterface>;
}

export type Submitter = (input: string) => void;

export function SubmitWrapper<T extends ChatSubmitComponentProps>({
  Form,
  props,
}: SubmitWrapperProps<T>) {
  const [chatOnTopicData, setChatOnTopicData] = useRecoilState<
    ChatStateType | undefined
  >(ChatOnTopicState);

  const [tempResponseStore, setTempResponseStore] = useState<ChatAnswer | null>(
    null
  );

  const submit: Submitter = useCallback(
    (input: string) => {
      if (chatOnTopicData) {
        setChatOnTopicData({
          ...chatOnTopicData,
          marker: chatOnTopicData.marker + 1,
          data: [
            ...chatOnTopicData.data,
            {
              id: chatOnTopicData.marker + 1,
              question: {
                id: chatOnTopicData.marker + 1,
                type: "question",
                question: input,
              },
              answer: {
                id: chatOnTopicData.marker + 1,
                type: "answer",
                answer: "",
                sub: [],
              },
            },
          ],
        });
        SendQuestion({
          id: chatOnTopicData.marker + 1,
          message: input,
        }).then((response) => setTempResponseStore(response));
      }
    },
    [chatOnTopicData]
  );

  const p: T = useMemo(
    () => (props ? ({ ...props, submit } as T) : ({ submit } as T)),
    [submit, props]
  );

  useEffect(() => {
    if (tempResponseStore && chatOnTopicData) {
      const targetData = chatOnTopicData.data.find(
        (data) => data.id === tempResponseStore.id
      ) as ChatData;

      const newData = { ...targetData };

      newData.answer = tempResponseStore;
      setChatOnTopicData({
        ...chatOnTopicData,
        data: [
          ...chatOnTopicData.data.filter((d) => d.id !== newData.id),
          newData,
        ].sort((a, b) => a.id - b.id),
      });
    }
  }, [tempResponseStore]);

  return <Form {...p} />;
}
