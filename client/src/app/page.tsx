import Image from "next/image";
import Header from "./_components/Header";
import image1 from "../public/Roblox.png";
import Link from "next/link";
import TheButton from "./_components/TheButton";
import { BsRobot } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/Fa";
import { HiOutlineClipboardList } from "react-icons/hi";

export default function Home() {
  return (
    <main className="">
      <div className="w-full bg-green-500 flex items-center align-center flex-col pt-10 pb-10"></div>

      <div className="flex items-center align-center bg-green-500 w-full">
        <div className=" py-10 px-24 w-6/12">
          <h1 className="text-4xl pb-5">
            Unlock your student financial potential with our quick quiz and let
            AI find the perfect tailored credit card.
          </h1>

          <p className="text-xl mb-4 ">
            Your financial future awaits. Begin your journey to the right
            student credit card today!
          </p>

          <Link href="/quiz"> <TheButton>Go to Quiz</TheButton> </Link> 
        </div>

        <div className="w-6/12">
          <img src="/CardSvg.svg" alt="" className="h-80"/>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl text-center mb-4"> The Process is simple! </h1>
      </div>

      <div className="flex items-center justify-center gap-x-44 w-full">

        <div className="flex flex-col items-center">
          <HiOutlineClipboardList size={50}/>
          <h1 className="text-center"> Complete the Quiz </h1>
          <p className="p-2 ml-16 mr-16">
            Taking the quiz is the initial and swift step in determining the
            ideal credit card for a student.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <BsRobot size={50}/>
          <h1 className="text-center"> AI Calculates Results </h1>
          <p className="p-2 ml-16 mr-16">
            AI rapidly processes the data to swiftly match students with their
            ideal credit card.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaRegCreditCard size={50}/>
          <h1 className="text-center"> Card Delivered </h1>
          <p className="p-2 ml-16 mr-16">
            After AI calculates the quiz results, users receive their
            recommended credit card offer.
          </p>
        </div>
      </div>
    </main>
  );
}