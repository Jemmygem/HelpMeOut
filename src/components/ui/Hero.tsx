import { Link } from "react-router-dom";
import Button from "../form/Button";
import HeroImage from "../../assets/heroImage.png";
import Shape1 from "../../assets/shape1.png";
import Shape2 from "../../assets/shape2.png";
import { RightArrIcon } from "../../assets/SvgIcons";

const Hero = () => {
  return (
    <div className="pb-10  lg:pb-16 bg-lightBg">
      <div className="overflow-hidden pb-40 px-4 xl:px-16 bg-white" id="home">
        <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-6 xl:px-0">
          <div className="relative ml-auto pt-20 xl:pt-36">
            <div className="gap-12 md:flex md:items-center">
              <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
                <h1 className="text-5xl font-black text-gray-800 md:text-6xl xl:text-7xl">
                  Show Them Don’t Just Tell
                </h1>
                <div className="">
                  <p className="mt-8 text-lg text-gray-700 max-w-lg">
                    Help your friends and loved ones by creating and sending
                    videos on how to get things done on a website.
                  </p>
                  <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start ">
                    <Link to="/login">
                      <Button rightIcon={<RightArrIcon />}>
                        Install HelpMeOut
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative mt-40 md:mt-0 md:w-2/5 lg:w-3/5">
                <div className="-ml-6 md:-mr-72 lg:mr-0 relative z-20">
                  <img
                    className="h-full object-cover object-left  ml-4 px-1"
                    src={HeroImage}
                    alt="heroImage screenshot"
                  />

                  <div className=" absolute top-[-80px] right-[-220px] animate-fly lg:top-[-80px] lg:right-[-40px] xl:right-[-70px]  -z-10">
                    <img className="" src={Shape1} alt="shape illustrate" />
                  </div>
                  <div className=" absolute bottom-[-85px] left-[-180px] animate-fly lg:bottom-[-85px] lg:-left-16 -z-10">
                    <img className=" " src={Shape2} alt="shape illustrate" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
