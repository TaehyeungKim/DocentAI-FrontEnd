import { useState } from "react";
import { BeforeSearchMode } from "./components/BeforeSearchMode";
import { AfterSearchMode } from "./components/AfterSearchMode";

export default function Search() {
  const [searchMode, setSearchMode] = useState<boolean>(false);

  const handleFocusOnSearchInputUI = () => {
    setSearchMode(true);
  };
  const handleClickOnBackButton = () => {
    setSearchMode(false);
  };

  return (
    <div className="flex flex-col h-screen">
      {searchMode ? (
        <AfterSearchMode
          onClickBackButton={handleClickOnBackButton}
        ></AfterSearchMode>
      ) : (
        <BeforeSearchMode
          onSearchInputUIFocus={handleFocusOnSearchInputUI}
        ></BeforeSearchMode>
      )}
    </div>
  );
}
