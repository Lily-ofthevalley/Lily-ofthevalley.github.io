interface Props {
  imageUrl: string;
  name: string;
  timeframe: string;
  educationalLevel: string;
  note: string;
}

const CardEducation = ({
  imageUrl,
  name,
  timeframe,
  educationalLevel,
  note,
}: Props) => {
  return (
    <div className="w-full min-h-1/5 h-auto bg-[#AC8DAF] rounded-4xl flex flex-col md:flex-row mb-3 p-3">
      <img
        src={imageUrl}
        alt={name}
        className="w-4/5 md:w-1/5 h-auto ml-3 mr-3 self-center"
      />
      <div>
        <p className="text-lg font-bold">{name}</p>
        <p>{educationalLevel}</p>
        <p>{timeframe}</p>
        <p>Note: {note}</p>
      </div>
    </div>
  );
};

export default CardEducation;
