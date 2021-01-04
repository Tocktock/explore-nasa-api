import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  title: string;
  description?: string;
  imgUrl: string;
  targetUrl?: string;
  imgWidth: number;
  imgHeight: number;
  bgcolor?: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2 text-gray-500 font-neuton">
        {props.title}
      </div>
      <div className={"relative w-256 cursor-pointer " + props.bgcolor}>
        <Image
          className="rounded-lg"
          src={props.imgUrl}
          width={props.imgWidth}
          height={props.imgHeight}
          layout="responsive"
        ></Image>
        <div className="absolute left-0 top-0 flex duration-200 align-middle justify-center z-10 opacity-0 hover:opacity-70 bg-black w-full h-full text-center rounded-lg">
          <div className="flex flex-col text-center justify-center text-white font-neuton">
            <div className="text-white text-3xl center">
              <p> Hi Friend !! </p>
              <p> {props.description}</p>
            </div>
            <div className="mt-2">
              <Link href={props.targetUrl ? props.targetUrl : ""}>
                <a className="py-2 px-3 border rounded-md hover:bg-gray-200 hover:text-gray-700 border-gray-300">
                  <span className="text-2xl">You Can Go Now !!</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
