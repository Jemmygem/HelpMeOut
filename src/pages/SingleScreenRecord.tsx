import Logo from "../assets/full-logo-sm.svg";
import profilePhoto from "../assets/profile-circle.png";
import {
  ArrDownIcon,
  CopyIcon,
  EditIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "../assets/SvgIcons";
import { Link } from "react-router-dom";
import screenShot from "../assets/videoscreenshot5.png";
import Button from "../components/form/Button";

const SingleScreenRecord = () => {
  return (
    <div className="px-4 lg:m-6 lg:px-10 xl:px-16">
      <div className="mt-10 flex items-center justify-between">
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

      <nav className="flex py-10" aria-label="Breadcrumb">
        <ol className="inline-flex items-center flex-wrap gap-2 space-x-1 md:space-x-3 text-borderColor/50">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium hover:text-borderColor  "
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <p>/</p>
              <Link
                to="/"
                className="ml-1 text-sm font-medium  md:ml-2 hover:text-borderColor"
              >
                Recent Videos
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <p>/</p>
              <span className="ml-1 text-sm font-medium text-[#413C6D] md:ml-2 ">
                How To Create A Facebook Ad Listing
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex items-center lg:gap-5 gap-14 ">
        <h2 className=" text-xl lg:text-2xl font-semibold text-textcolor">
          How To Create A Facebook Ad Listing
        </h2>
        <div className=" cursor-pointer w-6 h-6">
          <EditIcon />
        </div>
      </div>

      <div className=" border rounded-3xl p-4  my-6">
        <div className="overflow-hidden group relative">
          <img
            className=" w-full rounded-md max-h-[488px]"
            src={screenShot}
            alt="video screenshot"
          />
        </div>
      </div>
      <div className=" flex items-center flex-col lg:flex-row gap-6 lg:gap-12">
        <form className="relative w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium  text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-full">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4  text-sm min-w-[300px] lg:min-w-[350px] text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-main focus:border-main outline-none font-Inter placeholder:text-[#c3c3c3] "
              placeholder="enter email of receiver"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-[#605C84] hover:bg-[#413C6D] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Send
            </button>
          </div>
        </form>
        <div className="relative w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium  text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4  text-sm min-w-[300px] lg:min-w-[350px] text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-main focus:border-main outline-none placeholder:truncate placeholder:max-w-[250px] md:placeholder:max-w-full font-Inter placeholder:text-[#4B4B4B] "
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
            />
            <button
              type="submit"
              className="text-main border border-main absolute right-2.5 bottom-2.5  inline-flex items-center gap-1 focus:ring-4 focus:outline-none focus:ring-gray-200 font-normal rounded-lg text-sm px-4 py-2 "
            >
              <CopyIcon />
              <span className="hidden lg:flex">Copy URL</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h3 className="pb-4 font-semibold font-Inter">Share your video </h3>

        <div className=" flex items-center gap-3 flex-wrap">
          <Button color="outline" leftIcon={<FacebookIcon />}>
            Facebook
          </Button>
          <Button color="outline" leftIcon={<WhatsAppIcon />}>
            WhatsApp
          </Button>
          <Button color="outline" leftIcon={<TelegramIcon />}>
            Telegram
          </Button>
        </div>

        <section className="pt-6 pb-16">
          <h3 className=" font-semibold ">Transcript</h3>

          <div className=" my-4 ">
            <div className="p-2 cursor-pointer border px-3 border-[#CFCFCF] text-[#9D9D9D]  rounded-md inline-flex items-center gap-2">
              English
              <svg
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2807 6.46655L8.93404 10.8132C8.4207 11.3266 7.5807 11.3266 7.06737 10.8132L2.7207 6.46655"
                  stroke="#BBBBBB"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className=" space-y-4 max-h-[300px] overflow-y-scroll">
            <div className=" flex items-start gap-6 max-w-6xl">
              <h3 className="font-medium text-lg font-WorkSans">0.01</h3>
              <p className="font-WorkSans font-light">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
            <div className=" flex items-start gap-6 max-w-6xl">
              <h3 className="font-medium text-lg font-WorkSans">0.15</h3>
              <p className="font-WorkSans font-light">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
            <div className=" flex items-start gap-6 max-w-6xl">
              <h3 className="font-medium text-lg font-WorkSans">0.30</h3>
              <p className="font-WorkSans font-light">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
            <div className=" flex items-start gap-6 max-w-6xl">
              <h3 className="font-medium text-lg font-WorkSans">0.45</h3>
              <p className="font-WorkSans font-light">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
            <div className=" flex items-start gap-6 max-w-6xl">
              <h3 className="font-medium text-lg font-WorkSans">1.00</h3>
              <p className="font-WorkSans font-light">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
            <div className=" flex items-start gap-6 max-w-6xl">
              <h3 className="font-medium text-lg font-WorkSans">1.15</h3>
              <p className="font-WorkSans font-light">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleScreenRecord;
