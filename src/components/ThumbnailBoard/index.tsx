interface IThumbnailBoard {
  mainText: string;
  subText: string;
}

export const ThumbnailBoard = ({ mainText, subText }: IThumbnailBoard) => {
  return (
    <section className="w-full h-[143px] bg-primary flex flex-col justify-center gap-[10px]">
      <h2 className="text-white font-large text-large text-center">
        {mainText}
      </h2>
      <h5 className="text-white font-medium text-base text-center">
        {subText}
      </h5>
    </section>
  );
};
