interface Props {
  title: string;
}

const Seperator = ({ title }: Props) => {
  return (
    <div className="border-b-3 border-white w-4/5 flex justify-center m-8">
      <p className="text-6xl p-8">{title}</p>
    </div>
  );
};

export default Seperator;
