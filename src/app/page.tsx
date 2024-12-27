"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const data = [
    ["https://cdn.iconscout.com/icon/free/png-512/free-java-logo-icon-download-in-svg-png-gif-file-formats--food-background-fresh-nature-brand-pack-logos-icons-2284677.png?f=webp&w=256", "Java Logo", "The iconic Java programming language logo."],
    ["https://cdn.iconscout.com/icon/free/png-512/free-java-logo-icon-download-in-svg-png-gif-file-formats--duke-development-tools-pack-logos-icons-226003.png?f=webp&w=256", "Oracle Java", "Java is maintained and updated by Oracle Corporation."],
    ["https://cdn.iconscout.com/icon/premium/png-512-thumb/eclipse-ide-7521441-7197014.png?f=webp&w=256", "Eclipse IDE", "A widely-used IDE for Java development."],
    ["https://cdn.iconscout.com/icon/free/png-256/intellij-idea-569199.png", "IntelliJ IDEA", "A powerful IDE for Java programming."],
    ["https://cdn.iconscout.com/icon/free/png-512/free-spring-boot-logo-icon-download-in-svg-png-gif-file-formats--social-media-technology-brand-pack-logos-icons-4406740.png?f=webp&w=256", "Spring Framework", "A popular Java framework for building applications."]
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevIndex = (currentIndex - 1 + data.length) % data.length;
  const nextIndex = (currentIndex + 1) % data.length;

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex);
      setIsTransitioning(false);
    }, 400); 
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <>
      <h2 className="text-center text-3xl font-black">{data[currentIndex][1]}</h2>
      <div className="flex flex-row justify-around py-16 px-4 lg:px-10 xl:px-96">
        <div className="flex items-center">
          <button
            aria-label="Previous Image"
            className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            onClick={handlePrev}
          >
            <ArrowLeft color="#ffffff" />
          </button>
        </div>

        <div className="flex justify-around items-center">
          <div className={`hidden xl:flex flex-col items-center transition-opacity duration-400 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <Image
              src={data[prevIndex][0]}
              width={200}
              height={200}
              alt={data[prevIndex][1]}
              className="p-4"
            />
            <h1>{data[prevIndex][1]}</h1>
          </div>

          <div className={`flex flex-col items-center text-center transition-opacity duration-400 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <Image
              src={data[currentIndex][0]}
              width={400}
              height={400}
              alt={data[currentIndex][1]}
              className="p-4"
            />
            <h1 className="text-lg font-bold">{data[currentIndex][1]}</h1>
            <p className="text-gray-600">{data[currentIndex][2]}</p>
          </div>

          <div className={`hidden xl:flex flex-col items-center transition-opacity duration-400 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <Image
              src={data[nextIndex][0]}
              width={200}
              height={200}
              alt={data[nextIndex][1]}
              className="p-4"
            />
            <h1>{data[nextIndex][1]}</h1>
          </div>
        </div>

        <div className="flex items-center">
          <button
            aria-label="Next Image"
            className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            onClick={handleNext}
          >
            <ArrowRight color="#ffffff" />
          </button>
        </div>
      </div>
    </>
  );
}
