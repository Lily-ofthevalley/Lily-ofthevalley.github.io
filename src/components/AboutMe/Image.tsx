import me from "../../assets/me.png";

const Image = () => {
  return (
    <div className="bg-[#DDB6C6] rounded-xl m-3 flex justify-center">
      <img
        src={me}
        alt="An image of me"
        className="w-auto h-full p-3 rounded-xl"
      />
    </div>
  );
};

export default Image;
