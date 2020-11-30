import { render } from "@testing-library/react";
import CityHeader from "./CityHeader";
import { item } from "../mockData";
import moment from "moment";

const timeGMT = moment(item?.currentWeather?.time).format("HH:mm");

test("should render CityHeader component", () => {
  const wrapper = render(
    <CityHeader
      cityName={item.city.name}
      temp={item.currentWeather.temp}
      time={timeGMT}
      remainingTime={"0"}
      setRemainingTime={() => {}}
      timePeriod={"60"}
    />
  );
  expect(wrapper.getByTestId("cityHeaderWrapper")).toBeInTheDocument();
});

test("should render the city name in CityHeader component", () => {
  const wrapper = render(
    <CityHeader
      cityName={item.city.name}
      temp={item.currentWeather.temp}
      time={timeGMT}
      remainingTime={"0"}
      setRemainingTime={() => {}}
      timePeriod={"60"}
    />
  );
  expect(wrapper.getByText("LONDON")).toBeInTheDocument();
});

test("should render the time in CityHeader component", () => {
  const wrapper = render(
    <CityHeader
      cityName={item.city.name}
      temp={item.currentWeather.temp}
      time={timeGMT}
      remainingTime={"0"}
      setRemainingTime={() => {}}
      timePeriod={"60"}
    />
  );
  expect(wrapper.getByText("00:58 GMT")).toBeInTheDocument();
});

test("should render the Reloading time in CityHeader component", () => {
  const wrapper = render(
    <CityHeader
      cityName={item.city.name}
      temp={item.currentWeather.temp}
      time={timeGMT}
      remainingTime={"3"}
      setRemainingTime={() => {}}
      timePeriod={"60"}
    />
  );
  expect(wrapper.getByText("57")).toBeInTheDocument();
});

test("should render the temperature in CityHeader component", () => {
  const wrapper = render(
    <CityHeader
      cityName={item.city.name}
      temp={item.currentWeather.temp}
      time={timeGMT}
      remainingTime={"0"}
      setRemainingTime={() => {}}
      timePeriod={"60"}
    />
  );
  expect(wrapper.getByText(/7/i)).toBeInTheDocument();
});

test("should render 3 children in the CityHeader component", () => {
  const wrapper = render(
    <CityHeader
      cityName={item.city.name}
      temp={item.currentWeather.temp}
      time={timeGMT}
      remainingTime={"0"}
      setRemainingTime={() => {}}
      timePeriod={"60"}
    />
  );
  expect(wrapper.getByTestId("cityHeaderWrapper").children.length).toBe(3);
});

test("should render ProgressBar in the CityHeader component", () => {
  const wrapper = render(
    <CityHeader
      cityName={item.city.name}
      temp={item.currentWeather.temp}
      time={timeGMT}
      remainingTime={"5"}
      setRemainingTime={() => {}}
      timePeriod={"50"}
    />
  );

  expect(wrapper.getByTestId("cityHeaderProgressBar").style.width).toBe("10%");
});
