interface Props {
  title: string;
}

const Seperator = ({ title }: Props) => {
  return (
    <div className="border-b-2 border-white w-9/10 flex justify-start mb-4">
      <b className="text-3xl p-4">{title}</b>
    </div>
  );
};

export default Seperator;
