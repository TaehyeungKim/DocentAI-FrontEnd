import { Sheet } from "react-modal-sheet";
import { Navigate } from "@/assets/icons";
import { Piece } from "@/types";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";

interface ISearchHistoryList {
  historyList: Piece[];
}

const SearchHistoryList = ({ historyList }: ISearchHistoryList) => {
  const navigate = useNavigate();
  const { exhibitionId } = useParams();

  const handleHistoryClick = useCallback(
    (pieceId: number) => {
      if (!exhibitionId) throw new Error("유효한 전시회가 아님");
      navigate(`/chat/${exhibitionId}/${pieceId}`);
    },
    [exhibitionId]
  );

  return (
    <ul className="list-none p-0 m-0">
      {historyList.map((history) => {
        return (
          <li
            key={`${history.pieceName}_${history.pieceId}`}
            className="border-t-[1px] border-primary flex justify-between px-[20px] py-[18px] hover:bg-[#DBEBE1] cursor-pointer"
            onClick={() => handleHistoryClick(history.pieceId)}
          >
            <span className="font-medium text-regular">
              {history.pieceName} - {history.pieceAuthor}
            </span>
            <button className="w-[16.5px] aspect-square">{Navigate()}</button>
          </li>
        );
      })}
    </ul>
  );
};

export const SearchHistory = () => {
  return (
    <Sheet
      isOpen={true}
      onClose={() => console.log("close")}
      className="max-w-frame-width mx-auto w-full"
      snapPoints={[0.4]}
    >
      <Sheet.Container>
        <Sheet.Header className=" bg-[#CAE4D466] p-[30px]">
          <h3 className="font-bold text-semi-large text-primary">
            최근 대화한 작품
          </h3>
        </Sheet.Header>
        <Sheet.Content className="bg-[#CAE4D466] p-[30px] pt-0">
          <Sheet.Scroller>
            <SearchHistoryList
              historyList={[
                { pieceName: "소", pieceAuthor: "이중섭", pieceId: 1 },
                { pieceName: "소", pieceAuthor: "이중섭", pieceId: 2 },
                { pieceName: "소", pieceAuthor: "이중섭", pieceId: 3 },
                { pieceName: "소", pieceAuthor: "이중섭", pieceId: 4 },
                { pieceName: "소", pieceAuthor: "이중섭", pieceId: 5 },
                { pieceName: "소", pieceAuthor: "이중섭", pieceId: 6 },
              ]}
            ></SearchHistoryList>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};
