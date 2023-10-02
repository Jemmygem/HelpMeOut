import { Link } from "react-router-dom";
import { footer } from "../../data/footer";
import classNames from "classnames";
import { LogoWhite } from "../../assets/SvgIcons";

const Footer = () => {
  return (
    <>
      <div>
        <div id="footer" className="bg-main">
          <footer className=" pt-4 md:pt-12 lg:pt-16  border-t border-gray-100 text-white  max-w-7xl mx-auto  px-4 xl:px-8">
            <div className="grid grid-cols-8 gap-6 md:gap-0">
              <div className="col-span-8 md:col-span-3 lg:col-span-3">
                <div className="flex flex-col lg:flex-row  lg:items-center justify-between gap-6 lg:border-b border-white py-6 md:block md:space-y-5 md:border-none md:py-0">
                  <LogoWhite />
                </div>
              </div>
              <div className="col-span-8 md:col-span-5 lg:col-span-5">
                <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:pl-16 ">
                  {footer.columns.map(({ title, links, hideMobile }, index) => (
                    <div
                      key={index}
                      className={classNames({ "hidden lg:block": hideMobile })}
                    >
                      <h6 className="text-lg font-bold text-white">{title}</h6>
                      <ul className="mt-4 list-inside space-y-4">
                        {links.map(({ name, link, leavesWebsite }, index) => (
                          <li key={index}>
                            {leavesWebsite ? (
                              <a
                                href={link}
                                className="transition hover:text-orange-400"
                              >
                                {name}
                              </a>
                            ) : (
                              <Link
                                className="transition hover:text-orange-400"
                                to={link}
                              >
                                {name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="inflex lg:flex lg:justify-between border-t gap-4 border-gray-100 py-4 pb-8 ">
              <div>
                <span>
                  © {new Date().getFullYear()} HelpMeOut <span id="year" />{" "}
                </span>
                <span className="lg:hidden">-</span>{" "}
                <span>All right reserved</span>
              </div>
              <span className="hidden lg:block">
                Made with &hearts; by RACHID
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
