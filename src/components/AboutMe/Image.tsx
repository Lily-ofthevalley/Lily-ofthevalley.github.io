import me from "../../assets/me.png";

const Image = () => {
  return (
    <div className="m-3 flex justify-center w-2/6">
      <img
        src={me}
        alt="An image of me"
        className="w-auto h-full p-3 rounded-4xl"
      />
    </div>
  );
};

export default Image;
