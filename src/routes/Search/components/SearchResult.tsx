import { NavigateArrow } from "@/assets/icons";
import { Piece } from "@/types";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface ISearchResult {
  results: Piece[];
}

export const SearchResult = ({ results }: ISearchResult) => {
  const navigate = useNavigate();
  const { exhibitionId } = useParams();

  const handleResultClick = useCallback(
    (pieceId: number) => {
      if (!exhibitionId) throw new Error("유효한 전시회가 아님");
      navigate(`/chat/${exhibitionId}/${pieceId}`);
    },
    [exhibitionId]
  );

  return (
    <div className="rounded-[20px] w-full bg-white">
      <ul className="list-none p-0 m-0">
        {results.map((result) => {
          return (
            <li
              key={`${result.pieceName}_${result.pieceId}`}
              className="flex flex-row justify-between px-[20px] py-[18px] hover:bg-[#DBEBE166] cursor-pointer"
              onClick={() => handleResultClick(result.pieceId)}
            >
              <span>
                {result.pieceName} - {result.pieceAuthor}
              </span>
              <button className="w-[22px] aspect-square">
                <NavigateArrow />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
