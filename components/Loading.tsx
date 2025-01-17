import Lottie from "lottie-react";
import loading from "../assets/animation/loading.json";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black-100">
      <div className="flex flex-col items-center">
        <Lottie style={{ height: 150 }} animationData={loading} />
      </div>
    </div>
  );
};

export default Loading;
