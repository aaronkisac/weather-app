import { render } from "@testing-library/react";
import ForecastItem from "./ForecastItem";
import { item } from "../mockData";

test("should render ForecastItem component", () => {
  const wrapper = render(<ForecastItem weather={item[0]} index="3" />);
  expect(wrapper.getByTestId("forecastItemWrapper")).toBeInTheDocument();
});

test("should render the day name in ForecastItem component", () => {
  const wrapper = render(<ForecastItem weather={item[0]} index="3" />);
  expect(wrapper.getByText("MON")).toBeInTheDocument();
});

test("should render the ForecastItem component with zero child", () => {
  const wrapper = render(<ForecastItem weather={item[0]} index="3" />);
  expect(wrapper.getByText(/9/i)).toBeInTheDocument();
});

test("should render 5 children in the ForecastItem component", () => {
  const wrapper = render(<ForecastItem weather={item[0]} index="3" />);
  expect(wrapper.getByTestId("forecastItemWrapper").children.length).toBe(2);
});
