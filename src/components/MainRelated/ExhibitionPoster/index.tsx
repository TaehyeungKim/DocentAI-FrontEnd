import dummyPoster from "../../../assets/dummy-poster.png";

type ExhibitionPosterProps = {
  image: string;
  altText: string;
};

const ExhibitionPoster: React.FC<ExhibitionPosterProps> = ({
  image,
  altText,
}) => <img src={dummyPoster} alt={altText} className="h-[200px] w-auto" />;

export default ExhibitionPoster;
