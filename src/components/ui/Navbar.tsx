import { useState } from "react";
import Navlink from "./Navlink";
import classNames from "classnames";
import menu from "../../data/menu";
import Button from "../form/Button";
import { Link } from "react-router-dom";
import { RightArrIcon, XCloseIcon } from "../../assets/SvgIcons";
import Logo from "../../assets/full-logo-sm.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="relative">
      <nav className="bg-white top-0 left-0">
        <div className="flex items-center justify-between lg:mx-auto px-2 py-4 md:p-4  lg:px-10 xl:px-20">
          <Link to="/">
            <img src={Logo} width={180} height={32} alt="helpmeout Logo" />
          </Link>

          <button
            onClick={toggle}
            className="inline-flex items-center p-2 ml-3 text-sm text-neutral-black rounded-lg lg:hidden focus:outline-none "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="hidden w-full lg:block lg:w-auto">
            <ul className="flex items-center font-medium rounded-lg md:space-x-14 ">
              {menu.map(({ url, title }, index) => (
                <Navlink key={index} url={url} title={title} />
              ))}
            </ul>
          </div>
          <div className="hidden w-full lg:block lg:w-auto cursor-pointer">
            <Link to="/login">
              <p className="text-base font-semibold text-main">Get Started</p>
            </Link>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className={classNames(
            "absolute top-0 left-0 z-40 transition-all duration-700",
            { "h-full w-full": open },
            { "h-full w-0 ": !open }
          )}
        >
          <div className="lg:hidden block bg-white pb-12 transition-all duration-700">
            <div className="flex items-center justify-between p-6 border-b border-secondary-200">
              <p className="text-main font-bold">Menu</p>
              <span className="text-secondary-600" onClick={toggle}>
                <XCloseIcon />
              </span>
            </div>

            {menu.map(({ url, title }, index) => (
              <div
                key={index}
                className="flex items-center justify-left b p-6 border-b border-secondary-100"
              >
                <Link to={url}>
                  <p className="text-black">{title} </p>
                </Link>
              </div>
            ))}

            <div className="p-6">
              <Link to="/register">
                <Button rightIcon={<RightArrIcon />}>Install HelpMeOut</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
