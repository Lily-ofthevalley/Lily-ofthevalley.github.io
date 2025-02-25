interface Props {
  image: string;
  text: string;
}

const Card = ({ image, text }: Props) => {
  return (
    <div className="bg-[#AC8DAF] rounded-xl m-3 p-3 flex items-center h-24 w-auto">
      <img src={image} alt={text} className="w-auto h-4/5 mr-6" />
      <p className="text-3xl">{text}</p>
    </div>
  );
};

export default Card;
