import howitwork from "../../data/howitwork";
import HowItWorkCard from "./HowItWorkCard";
const HowItWork = () => {
  return (
    <div className="pb-10 lg:pb-16 ">
      <div className="bg-white pt-20">
        <div className="mx-auto md:w-3/5">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            How it works
          </h2>
        </div>

        <div className="py-0">
          <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
            <div className="mt-8 lg:mt-16 grid gap-4 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3">
              {howitwork.map(({ title, description, id }, index) => (
                <HowItWorkCard
                  title={title}
                  description={description}
                  id={id}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
