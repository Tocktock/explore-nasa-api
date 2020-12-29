import { useRef } from "react";
import Image from "next/image";
import Card from "../components/Card/Card";

const IndexPage = () => {
  const slider = useRef<HTMLDivElement>();

  const moveLeft = () => {
    let marginLeftNow = slider.current!.style.marginLeft
      ? Number.parseInt(slider.current!.style.marginLeft)
      : 0;
    console.log(marginLeftNow);
    marginLeftNow = marginLeftNow === 0 ? -320 : marginLeftNow;
    slider.current!.style.marginLeft = marginLeftNow + 64 + "rem";
  };

  const moveRight = () => {
    let marginLeftNow = slider.current!.style.marginLeft
      ? Number.parseInt(slider.current!.style.marginLeft)
      : 0;
    console.log(marginLeftNow);
    marginLeftNow = marginLeftNow === -256 ? 64 : marginLeftNow;
    slider.current!.style.marginLeft = marginLeftNow + -64 + "rem";
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-512 h-256 m-auto flex items-center place-content-center">
        <i
          onMouseUp={moveLeft}
          className="cursor-pointer text-3xl m-3 fas fa-arrow-left"
        ></i>
        <div className="flex w-256 h-128 overflow-hidden">
          <div ref={slider} className="duration-300 relative flex h-64">
            <Card title="Slide 1" bgcolor="bg-red-200" />
            <Card title="Slide 2" bgcolor="bg-blue-200" />
            <Card title="Slide 3" bgcolor="bg-gray-200" />
            <Card title="Slide 4" bgcolor="bg-green-200" />
            <Card title="Slide 5" bgcolor="bg-yellow-200" />
          </div>
        </div>
        <i
          onMouseUp={moveRight}
          className="cursor-pointer text-3xl m-3 fas fa-arrow-right"
        ></i>
      </div>
    </div>
  );
};

export default IndexPage;

// const getToday = () => {
//   let date = new Date();
//   let y = date.getFullYear();
//   let m = ("0" + (1 + date.getMonth())).slice(-2);
//   let d = ("0" + date.getDate()).slice(-2);
//   return `${y}-${m}-${d}`;
// };

// const getDateURL = () => {};
