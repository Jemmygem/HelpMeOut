import classNames from "classnames";
import { Link } from "react-router-dom";
import { MenuTypes } from "../../data/menu";

const Navlink = ({ className, url, title }: MenuTypes) => {
  return (
    <Link to={url}>
      <li className={classNames("text-secondary-800 text-sm ", className)}>
        {title}
      </li>
    </Link>
  );
};

export default Navlink;
