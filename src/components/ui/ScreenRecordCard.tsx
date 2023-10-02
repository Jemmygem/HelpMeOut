/* eslint-disable @typescript-eslint/no-explicit-any */
import { LinkIcon, MoreIcon } from "../../assets/SvgIcons";

const ScreenRecordCard = ({
  imagePath,
  title,
  date,
}: {
  imagePath: string | any;
  title: string;
  date: string;
}) => {
  return (
    <div className=" border rounded-3xl p-4 lg:p-6 ">
      <div className="overflow-hidden group relative">
        <img
          className=" w-full rounded-xl max-h-60"
          src={imagePath}
          alt="video screenshot"
        />
        <div className=" pt-3 flex items-center justify-between gap-10 ">
          <div className="">
            <h1 className="text-borderColor font-semibold lg:font-medium font-Inter lg:text-xl">
              {title}
            </h1>
            <p className="text-gray-400 font-light uppercase">{date}</p>
          </div>
          <div className="flex items-center gap-4">
            <LinkIcon />
            <MoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecordCard;
