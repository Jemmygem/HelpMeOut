export type ScreenRecordTypes = {
  imagePath: string;
  title: string;
  date: string;
};
import screenshot1 from "../assets/videoscreenshot1.png";
import screenshot2 from "../assets/videoscreenshot2.png";
import screenshot3 from "../assets/videoscreenshot3.png";
import screenshot4 from "../assets/videoscreenshot4.png";

const screenRecord: ScreenRecordTypes[] = [
  {
    imagePath: screenshot1,
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
  },
  {
    imagePath: screenshot2,
    title: "How to create Twitter Ad listing",
    date: "SEPTEMBER 24, 2023",
  },
  {
    imagePath: screenshot3,
    title: "How to create Instagram Ad listing",
    date: "SEPTEMBER 25, 2023",
  },
  {
    imagePath: screenshot4,
    title: "How to create Google Ad listing",
    date: "SEPTEMBER 26, 2023",
  },
];

export default screenRecord;
