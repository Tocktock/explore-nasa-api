import { useRef, useState } from "react";
import Loading from "../../components/Loading";
interface DataType {
  dataType: string;
  url: string;
}
const IndexPage = () => {
  const NASA_API_URL =
    "https://api.nasa.gov/planetary/apod?api_key=mdBIpzOdV161Bm4oALh15sAfLpi1R6Mx275E1Jce&&date=";
  const photoImgRef = useRef<HTMLImageElement>(null);
  const [data, setData] = useState<DataType>();
  const [isLoading, setisLoading] = useState<boolean>(false);
  const fetchPhoto = (e) => {
    // date check
    const nowDate = new Date();
    const selectedDate = new Date(e.target.value);
    if (nowDate < selectedDate) {
      alert("Please Choose Day Before Today");
      return;
    }
    if (isLoading === true) {
      alert("Wait until previous request done");
      return;
    }
    // set date and loading state
    console.log(NASA_API_URL + e.target.value);
    // fetch data
    fetch(NASA_API_URL + e.target.value)
      .then((res) => {
        setisLoading(true);
        return res.json();
      })
      .then((v) => {
        setData({ dataType: v.media_type, url: v.url });

        return v;
      })
      .then((v) => {
        if (v.media_type === "video") {
          alert(
            `This day, photo is not taken, but you can see video from ${v.url}`
          );
          setisLoading(false);
        }
      })
      .catch((reason) => {
        alert(reason);
      });
  };
  const renderImage = () => {
    setisLoading(false);
    photoImgRef.current!.className = "opacity-100 ";
  };

  return (
    <div className="w-screen h-192 m-auto flex flex-col items-center bg-gray-900">
      <div className="text-4xl font-bold mb-2 text-gray-500 font-neuton">
        <span>APOD</span>
      </div>
      <p className="text-coolBlue">
        APOD means "Astronomy Picture of the Day" You Can See Beautiful
        Photograph
      </p>
      <label className="mt-2" htmlFor="pick-date">
        <span className="text-coolBlue">You Can Choose Any Day</span>
        <input
          onChange={fetchPhoto}
          className="ml-4 text-center"
          type="date"
          name="pick-date"
          id="pick-date"
        />
      </label>
      <div className="overflow-hidden">
        {isLoading && <Loading />}
        {data?.dataType === "image" && (
          <img
            className="opacity-0"
            ref={photoImgRef}
            onLoad={renderImage}
            src={data.url}
            width={1024}
            height={768}
          ></img>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
