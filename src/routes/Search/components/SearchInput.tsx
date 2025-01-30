import { Input } from "@/components/Input";
import { SearchIcon } from "@/assets/icons";

interface ISearchInputUI {
  onFocus: () => void;
}

export const SearchInputUI = ({ onFocus }: ISearchInputUI) => {
  return (
    <div className="w-[90%] mx-auto relative flex items-center mt-[14px]">
      <button className="w-icon absolute items-center flex left-4">
        <SearchIcon />
      </button>
      <Input
        placeholder="궁금한 작품을 검색하세요"
        onFocus={onFocus}
        className="rounded-full pl-11"
      ></Input>
    </div>
  );
};
