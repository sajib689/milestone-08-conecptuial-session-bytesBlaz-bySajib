import Hero from "../../Components/Hero/Hero";
import wave from '../../assets/wave.svg'
const MainHome = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-[calc(100vh-116px)]">
        <Hero/>
        <img className="absolute bottom-0 left-0 w-[100%]" src={wave} alt="" />
    </div>
  );
};

export default MainHome;
