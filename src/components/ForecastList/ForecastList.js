import React from "react";
import ForecastItem from "../ForecastItem/ForecastItem";

const ForecastList = ({ foreCastList }) => {
  console.log("​ForecastList -> foreCastList", foreCastList);
  return (
    <>
      {foreCastList?.map((item) => (
        <ForecastItem key={`key-${item.id}`} weather={item} />
      ))}
    </>
  );
};
export default ForecastList;
