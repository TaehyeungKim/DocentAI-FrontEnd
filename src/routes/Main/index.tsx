import { useNavigate } from "react-router-dom";
import ExhibitionItem from "@/components/MainRelated/ExhibitionItem";
import posterImage from "../../assets/dummy-poster.png";
import mainLogo from "../../assets/icons/mainLogo.png";

export default function Main() {
  const navigate = useNavigate();

  const exhibitions = [
    {
      image: posterImage,
      altText: "더미포스터",
      title: "MMCA 이건희컬렉션 특별전 이중섭",
      date: "2022.8.12. ~ 2023.4.23.",
    },
    {
      image: posterImage,
      altText: "더미포스터",
      title: "MMCA 이건희컬렉션 특별전 이중섭",
      date: "2022.8.12. ~ 2023.4.23.",
    },
    {
      image: posterImage,
      altText: "더미포스터",
      title: "MMCA 이건희컬렉션 특별전 이중섭",
      date: "2022.8.12. ~ 2023.4.23.",
    },
    {
      image: posterImage,
      altText: "더미포스터",
      title: "MMCA 이건희컬렉션 특별전 이중섭",
      date: "2022.8.12. ~ 2023.4.23.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/*header*/}
      <div className="h-15 p-5 justify-start items-center gap-2.5">
        <img src={mainLogo} alt="Main Logo" />
      </div>
      {/*subheader*/}
      <div className="h-36 px-8 py-10 mb-5 flex flex-col items-center gap-1.5 bg-primary">
        <h2 className="text-white text-[25px] font-bold text-center">
          지금 어떤 전시를 보고 있나요?
        </h2>
        <p className="text-white text-[15px] font-medium text-center">
          도슨트와 함께할 전시회를 선택해주세요.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 px-3 pb-4 w-full h-[700px] overflow-y-scroll">
        {exhibitions.map((exhibition, index) => (
          <ExhibitionItem
            key={index}
            image={exhibition.image}
            altText={exhibition.altText}
            title={exhibition.title}
            date={exhibition.date}
            onClick={() => navigate("/chat")}
          />
        ))}
      </div>
    </div>
  );
}
