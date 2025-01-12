import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex items-center justify-center">
        <ReactLoading type={"spin"} color={"#007BFF"} height={50} width={50} />
      </div>
    </div>
  );
};

export default Loading;
