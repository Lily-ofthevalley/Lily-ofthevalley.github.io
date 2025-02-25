interface Props {
  title: string;
}

const seperator = ({ title }: Props) => {
  return (
    <div className="border-2 border-white w-full">
      <b className="text-6xl">{title}</b>
    </div>
  );
};

export default seperator;
