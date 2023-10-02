import { ArrDownIcon } from "../assets/SvgIcons";
import Logo from "../assets/full-logo-sm.svg";
import profilePhoto from "../assets/profile-circle.png";

import { Link } from "react-router-dom";
import screenRecord from "../data/screenRecord";
import ScreenRecordCard from "../components/ui/ScreenRecordCard";

const Repository = () => {
  return (
    <>
      <div className="px-4 lg:px-10 xl:px-16">
        <div className="lg:m-6 mt-10 flex items-center justify-between">
          <Link to="/">
            <img src={Logo} width={180} height={32} alt="helpmeout Logo" />
          </Link>
          <div className="flex items-center space-x-2">
            <img
              className="w-10 h-10 rounded-full"
              src={profilePhoto}
              alt=" User avatar"
            />
            <h6 className="font-Inter hidden lg:flex font-medium text-gray-700">
              John Mark
            </h6>
            <span className=" hidden lg:flex">
              <ArrDownIcon />
            </span>
          </div>
        </div>
        <div className="flex flex-col pt-12 gap-4 lg:flex-row lg:items-center justify-between">
          <div className="">
            <h1 className=" text-2xl font-bold lg:text-3xl text-borderColor">
              Hello, John Mark
            </h1>
            <p className="text-borderColor/70">Here are your recorded videos</p>
          </div>
          <div className="">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium  text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.58268 18.0001C13.9549 18.0001 17.4993 14.4557 17.4993 10.0834C17.4993 5.71116 13.9549 2.16675 9.58268 2.16675C5.21043 2.16675 1.66602 5.71116 1.66602 10.0834C1.66602 14.4557 5.21043 18.0001 9.58268 18.0001Z"
                      stroke="#C3C3C3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3327 18.8334L16.666 17.1667"
                      stroke="#C3C3C3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-12 text-sm min-w-[300px] lg:min-w-[350px] text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-main focus:border-main outline-none font-Inter placeholder:text-[#c3c3c3] "
                  placeholder="Search for a particular video"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="py-12">
        <hr className="w-full h-px  bg-gray-300 border-0 rounded " />
      </div>
      <div className="px-4 pb-10 lg:px-10 xl:px-16">
        <h2 className=" text-xl lg:text-2xl text-borderColor/80 font-medium py-4">
          Recent files
        </h2>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-16 ">
          {screenRecord.slice(0, 2).map(({ imagePath, title, date }, index) => (
            <ScreenRecordCard
              key={index}
              imagePath={imagePath}
              date={date}
              title={title}
            />
          ))}
        </div>
        <div className="py-6">
          <h2 className=" text-xl lg:text-2xl text-borderColor/80 font-medium py-4">
            Files from last week
          </h2>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-16 ">
            {screenRecord.slice(2).map(({ imagePath, title, date }, index) => (
              <ScreenRecordCard
                key={index}
                imagePath={imagePath}
                date={date}
                title={title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Repository;
