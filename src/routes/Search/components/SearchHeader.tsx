import { BackButton } from "@/components/BackButton";
import { HeaderLayout } from "@/components/HeaderLayout";
import { useNavigate } from "react-router-dom";

export const SearchHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <div className="flex flex-row">
        <BackButton onClickBack={() => navigate("/main")}></BackButton>
        <h3 className="headerMainTextStyle">전시회 선택</h3>
      </div>
    </HeaderLayout>
  );
};
