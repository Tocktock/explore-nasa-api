import React from "react";

type Props = {
  title: string;
  description?: string;
  url?: string;
  bgcolor?: string;
};

const Card: React.FC<Props> = (props) => (
  <div className="text-center">
    <span className="text-4xl font-bold ">{props.title}</span>
    <div className={"mt-2 w-256 h-116 " + props.bgcolor}></div>
  </div>
);

export default Card;
