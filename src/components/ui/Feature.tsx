import {
  FeatureIcon1,
  FeatureIcon2,
  FeatureIcon3,
} from "../../assets/SvgIcons";
import featureImage from "../../assets/feature.png";

const Feature = () => {
  return (
    <div className="pb-10 lg:pb-16 bg-lightBg">
      <div id="features" className="relative pt-20  bg-white">
        <div className="mx-auto max-w-6xl px-0 md:px-12 lg:px-6 xl:px-0">
          <div className="mx-auto md:w-3/5">
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              Features
            </h2>
            <p className="mt-4 lg:text-lg text-center text-gray-600 dark:text-gray-300">
              Key Highlights of Our Extension
            </p>
          </div>
          <div className="pt-20 pb-10 ">
            <div className="mx-auto max-w-6xl px-4 md:px-12 lg:px-6 xl:px-0">
              <div className="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
                <div className="relative ml-auto h-full md:w-1/2">
                  <img
                    src={featureImage}
                    alt="Freature Image"
                    // width={1174}
                    // height={1134}
                  />
                </div>
                <div className="md:w-1/2 lg:w-[47%]">
                  <div className="space-y-10 ">
                    <div className="mt-8 flex gap-4 md:items-start">
                      <div className="flex h-12 w-12 gap-4  ">
                        <FeatureIcon1 />
                      </div>
                      <div className="w-5/6">
                        <h3 className="text-lg lg:text-2xl font-semibold text-textcolor">
                          Simple Screen Recording
                        </h3>
                        <p className="text-gray-500 ">
                          Effortless screen recording for everyone. Record with
                          ease, no tech expertise required.
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 flex gap-4 md:items-start">
                      <div className="flex h-12 w-12 gap-4  ">
                        <FeatureIcon2 />
                      </div>
                      <div className="w-5/6">
                        <h3 className="text-lg lg:text-2xl font-semibold text-textcolor">
                          Easy-to-Share URL
                        </h3>
                        <p className="text-gray-500 ">
                          Share your recordings instantly with a single link. No
                          attachments, no downloads.
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 flex gap-4 md:items-start">
                      <div className="flex h-12 w-12 gap-4  ">
                        <FeatureIcon3 />
                      </div>
                      <div className="w-5/6">
                        <h3 className="text-lg lg:text-2xl font-semibold text-textcolor">
                          Revisit Recordings
                        </h3>
                        <p className="text-gray-500 ">
                          Access and review your past content effortlessly. Your
                          recordings, always at your fingertips.
                        </p>
                      </div>
                    </div>
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

export default Feature;
