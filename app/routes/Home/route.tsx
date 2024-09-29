import MainPageVideo from "./components/MainPageVideo.mp4";
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
  videoUrl: string;
};

export const loader = async (): Promise<LoaderData> => {
  return {
    videoUrl: MainPageVideo as unknown as string, // Ensure MainPageVideo is treated as a string
  };
};

const Home = () => {
  const { videoUrl } = useLoaderData<LoaderData>();
  return (   
    <div className="relative w-full h-screen overflow-hidden">     
      <video
        autoPlay
        loop
        muted
        disablePictureInPicture
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <source src={videoUrl} type="video/mp4" />
        <track
          kind="captions"
          srcLang="en"
          src="./components/captions.vtt"
          default
        />
      </video>
    </div>
  );
};

export default Home;
