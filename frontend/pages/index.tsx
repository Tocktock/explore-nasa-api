import { useRef } from "react";
import Image from "next/image";
import Card from "../components/Card/Card";

const IndexPage = () => {
  const slider = useRef<HTMLDivElement>();
  const baseCardSize = 64;
  const moveLeft = () => {
    let marginLeftNow = slider.current!.style.marginLeft
      ? Number.parseInt(slider.current!.style.marginLeft)
      : 0;
    marginLeftNow = marginLeftNow === 0 ? -baseCardSize * 5 : marginLeftNow;
    slider.current!.style.marginLeft = marginLeftNow + baseCardSize + "rem";
  };

  const moveRight = () => {
    let marginLeftNow = slider.current!.style.marginLeft
      ? Number.parseInt(slider.current!.style.marginLeft)
      : 0;
    marginLeftNow =
      marginLeftNow === -baseCardSize * 4 ? baseCardSize : marginLeftNow;
    slider.current!.style.marginLeft = marginLeftNow + -baseCardSize + "rem";
  };

  return (
    <div className="w-screen h-192 m-auto flex items-center place-content-center bg-gray-900">
      <i
        onMouseUp={moveLeft}
        className="cursor-pointer text-coolBlue text-3xl m-3 fas fa-arrow-left"
      ></i>
      <div className="flex w-256 h-176 overflow-hidden">
        <div ref={slider} className="duration-300 relative flex w-256 h-176">
          <Card
            title="APOD"
            imgUrl="/imgs/Trifid_HubbleMehla_1024.jpg"
            description="You Can See the Beautiful Daily Space Photograph"
            imgWidth={1024}
            imgHeight={611}
            targetUrl="apod"
          />
          <Card
            title="Slide 2"
            imgUrl="/imgs/Trifid_HubbleMehla_1024.jpg"
            imgWidth={1024}
            imgHeight={611}
          />
          <Card
            title="Slide 3"
            imgUrl="/imgs/Trifid_HubbleMehla_1024.jpg"
            imgWidth={1024}
            imgHeight={611}
          />
          <Card
            title="Slide 4"
            imgUrl="/imgs/Trifid_HubbleMehla_1024.jpg"
            imgWidth={1024}
            imgHeight={611}
          />
          <Card
            title="Slide 5"
            imgUrl="/imgs/Trifid_HubbleMehla_1024.jpg"
            imgWidth={1024}
            imgHeight={611}
          />
        </div>
      </div>
      <i
        onMouseUp={moveRight}
        className="cursor-pointer text-coolBlue text-3xl m-3 fas fa-arrow-right"
      ></i>
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
