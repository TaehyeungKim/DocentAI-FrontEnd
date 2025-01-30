import { SearchIcon, X_icon } from "@/assets/icons";
import { BackButton } from "@/components/BackButton";
import { Input } from "@/components/Input";
import RecursiveFloatingContainer from "@/components/RecursiveFloating";
import { Piece } from "@/types";
import { useEffect, useState } from "react";

import { SearchResult } from "./SearchResult";

interface IAfterSearchMode {
  onClickBackButton: () => void;
}

export const AfterSearchMode = ({ onClickBackButton }: IAfterSearchMode) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const [searchResults, setSearchResults] = useState<Piece[]>([]);

  const handleSearchInputChange = (value: string) => setSearchInput(value);

  useEffect(() => {
    if (searchInput) {
      setSearchResults([
        { pieceName: "소", pieceAuthor: "이중섭", pieceId: 1 },
        { pieceName: "소", pieceAuthor: "이중섭", pieceId: 2 },
        { pieceName: "소", pieceAuthor: "이중섭", pieceId: 3 },
        { pieceName: "소", pieceAuthor: "이중섭", pieceId: 4 },
        { pieceName: "소", pieceAuthor: "이중섭", pieceId: 5 },
        { pieceName: "소", pieceAuthor: "이중섭", pieceId: 6 },
      ]);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  return (
    <div className="w-full h-full p-[10px] bg-chatbubble flex flex-col gap-[10px]">
      <RecursiveFloatingContainer floating="chatFloating">
        <div className="relative flex items-center">
          <BackButton
            onClickBack={onClickBackButton}
            className="absolute left-3"
          ></BackButton>
          <Input
            placeholder="궁금한 작품을 검색하세요"
            autoFocus
            className="border-none pl-10"
            onInputChange={handleSearchInputChange}
            inputValue={searchInput}
          ></Input>
          <button className="absolute right-3 w-[22px]">{X_icon()}</button>
        </div>
      </RecursiveFloatingContainer>
      {searchResults.length === 0 ? (
        <NoSearchResult />
      ) : (
        <SearchResult results={searchResults}></SearchResult>
      )}
    </div>
  );
};

const NoSearchResult = () => {
  return (
    <div className="flex flex-col grow items-center justify-center gap-5">
      <div className="w-[80px] aspect-square">
        <SearchIcon className="stroke-[#B3B3B3]" />
      </div>
      <h4 className="text-[#B3B3B3] font-bold text-semi-large">
        검색 결과가 없습니다.
      </h4>
    </div>
  );
};
