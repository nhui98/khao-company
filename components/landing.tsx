import Image from "next/image";

import { AiOutlineDown } from "react-icons/ai";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/bg-video.mp4" type="video/mp4" />
      </video>
      <div
        className={`flex-grow-0 z-10 pt-10 transition-opacity duration-1000`}
      >
        khao
      </div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Khao</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Web Development,</span> <span>done wrong.</span>
        </h2>
      </div>
      <div className="z-10 text-3xl text-white flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default Landing;
