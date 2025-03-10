interface Props {
  title: string;
  imageUrl: string;
  info: string;
  description: string;
  linkName: string;
  link: string;
  warning?: string;
}

const Card = ({
  title,
  imageUrl,
  info,
  description,
  linkName,
  link,
  warning,
}: Props) => {
  return (
    <div className="bg-[#DDB6C6] rounded-xl m-3 flex flex-col h-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-46 object-fit rounded-t-xl"
      />
      <div className="p-3 flex flex-col flex-grow">
        <h1 className="text-bold text-2xl">{title}</h1>
        <p className="text-[#AC8DAF] text-lg">{info}</p>
        <p className="mb-6">{description}</p>
        {warning && (
          <p className="text-bold bg-[#ac8daf7d] mt-auto w-4/5 p-2 rounded-xl">
            !{warning}!
          </p>
        )}
        <a
          href={link}
          className={`w-4/5 bg-[#AC8DAF] p-2 rounded-xl duration-300 ease-in-out hover:scale-105 ${
            !warning ? "mt-auto" : "mt-3"
          }`}
          target="Blank_"
        >
          {linkName}
        </a>
      </div>
    </div>
  );
};

export default Card;
