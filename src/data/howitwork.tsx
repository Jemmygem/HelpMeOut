export type howItWorkTypes = {
  title: string;
  description: string;
  id: number;
  className?: string;
};

const howitwork: howItWorkTypes[] = [
  {
    title: "Record Screen",
    description:
      'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
    id: 1,
  },
  {
    title: "Share Your Recording",
    description:
      "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
    id: 2,
  },
  {
    title: "Learn Effortlessly",
    description:
      "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
    id: 3,
  },
];

export default howitwork;
