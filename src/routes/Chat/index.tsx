import { ChatUserInput, ChatContent } from "@/routes/Chat/components";
import { useRecoilState } from "recoil";
import {
  ChatTopicState,
  ChatOnTopicState,
  ChatTopicStateType,
  ChatStateType,
  ChatState,
} from "@/state";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "@/components/BackButton";
import { HeaderLayout } from "@/components/HeaderLayout";

export default function Chat() {
  const navigate = useNavigate();
  const { exhibitionId, pieceId } = useParams();

  const [topic, setTopic] = useRecoilState<ChatTopicStateType>(ChatTopicState);

  const [allChatData, setAllChatData] =
    useRecoilState<ChatStateType[]>(ChatState);

  const [chatOnTopicData, setChatOnTopicData] = useRecoilState<
    ChatStateType | undefined
  >(ChatOnTopicState);

  useEffect(() => {
    pieceId && setTopic(pieceId);
  }, [pieceId]);

  useEffect(() => {
    if (topic && !chatOnTopicData)
      setAllChatData([
        ...allChatData,
        {
          name: topic,
          data: [
            {
              id: 0,
              answer: {
                id: 0,
                type: "answer",
                answer: `${topic}에 오신 것을 환영합니다.`,
                sub: [
                  "작품 설명해줘",
                  "작가 설명해줘",
                  "비슷한 작품 추천해줘",
                  "감상 써줘",
                  "너는 어떤 기능들이 있어?",
                ],
              },
            },
          ],
          marker: 0,
        },
      ]);
  }, [topic]);

  return (
    <div className="flex flex-col h-screen">
      <HeaderLayout className="shadow-chat-header">
        <div className="flex flex-row">
          <BackButton
            onClickBack={() => navigate(`/search/${exhibitionId}`)}
          ></BackButton>
          <h3 className="headerMainTextStyle">작품 선택</h3>
        </div>
        <h3 className="headerMainTextStyle">소2-이중섭</h3>
      </HeaderLayout>
      <ChatContent />
      <ChatUserInput />
    </div>
  );
}
