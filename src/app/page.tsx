import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const data = [
    ["https://shashank-portfolio-flame.vercel.app/assets/img/twitter-logo.png", "title", "description"],
    ["image link 2", "title 2", "description 2"]
  ];

  return (
    <>
      <h2 className="text-center text-3xl font-black">Title goes here</h2>
      <div className="flex flex-row justify-around py-16 px-10 xl:px-96">
        <div className="flex items-center justify-center">
          <button className="bg-gray-600 text-white rounded-full p-2">
            <ArrowLeft color="#ffffff" />
          </button>
        </div>

      <div className="flex justify-around">
        <div className="hidden xl:flex flex-col items-center justify-center">
        <Image
            src={data[0][0]}
            width={300}
            height={300}
            alt="Picture of the author"
            className="p-10 "
          />
          <h1>{data[1][1]}</h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src={data[0][0]}
            width={500}
            height={500}
            alt="Picture of the author"
            className="p-10 "
          />
          <h1>{data[1][1]}</h1>
          <h3>{data[1][2]}</h3>
        </div>

        <div className="hidden xl:flex flex-col items-center justify-center">
        <Image
            src={data[0][0]}
            width={300}
            height={300}
            alt="Picture of the author"
            className="p-10"
          />
          <h1>{data[1][1]}</h1>
        </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-gray-600 text-white rounded-full p-2">
            <ArrowRight color="#ffffff" />
          </button>
        </div>

      </div>
    </>
  );
}