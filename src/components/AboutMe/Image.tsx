import me from "../../assets/me.png";

const Image = () => {
  return (
    <div className="h-full rounded-full overflow-hidden border-5 border-[#795B82]">
      <img
        src={me}
        alt="An image of me"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Image;
