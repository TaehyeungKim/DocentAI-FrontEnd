import { ThumbnailBoard } from "@/components/ThumbnailBoard";
import { SearchHeader } from "./SearchHeader";
import { SearchInputUI } from "./SearchInput";
import { SearchHistory } from "./SearchHistory";

interface IBeforeSearchMode {
  onSearchInputUIFocus: () => void;
}

export const BeforeSearchMode = ({
  onSearchInputUIFocus,
}: IBeforeSearchMode) => {
  return (
    <>
      <SearchHeader />
      <ThumbnailBoard
        mainText="어떤 작품이 궁금하신가요?"
        subText="도슨트와 대화를 나누고 싶은 작품을 선택해주세요."
      ></ThumbnailBoard>
      <section className="grow flex flex-col items-center">
        <h3 className="font-bold text-semi-large mt-[50px]">
          대한민국예술원 개원 70년: 지금, 잇다
        </h3>
        <SearchInputUI onFocus={onSearchInputUIFocus} />
      </section>
      <SearchHistory></SearchHistory>
    </>
  );
};
