import howtoImage from "../../assets/howtoImage.png";

const HowItWorkCard = ({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: number;
}) => {
  return (
    <div className="p-8 sm:p-10 rounded-3xl  hover:shadow-sm cursor-pointer shadow-gray-600/10">
      <div className="space-y-10 flex flex-col items-center justify-center">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-main "
        >
          <span className="font-bold text-xl lg:text-2xl text-white">{id}</span>
        </div>
        <div className="space-y-4 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-textcolor transition ">
            {title}
          </h3>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
        <img
          src={howtoImage}
          // className="w-16"
          // width={512}
          // height={512}
          alt="how it work illustration"
        />
      </div>
    </div>
  );
};

export default HowItWorkCard;
