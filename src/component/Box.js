import React from "react";

const Box = (props) => {
  console.log("props", props);

  let result;
  if (props.title === "Computer" && props.result !== "tie" && props.result !== "") {
    // "Computer"이고, "tie"가 아니며, 빈 문자열이 아니라면
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2> {/* props.item이 존재하고 props.item.name이 존재할 때에만 값을 반환 */}
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
