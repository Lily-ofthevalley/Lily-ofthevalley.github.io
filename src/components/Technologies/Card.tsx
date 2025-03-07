interface Props {
  image: string;
  text: string;
}

const Card = ({ image, text }: Props) => {
  return (
    <div className="bg-[#AC8DAF] rounded-xl m-3 p-3 flex items-center justify-center h-auto">
      <img src={image} alt={text} className="w-auto h-4/5" />
    </div>
  );
};

export default Card;
