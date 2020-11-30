import { render } from "@testing-library/react";
import CityTemperature from "./CityTemperature";

test("should render CityTemperature component", () => {
  const wrapper = render(<CityTemperature />);
  expect(wrapper.getByTestId("cityTemperatureWrapper")).toBeInTheDocument();
});

test("should render 2 children in CityTemperature component", () => {
  const wrapper = render(<CityTemperature />);
  expect(wrapper.getByTestId("cityTemperatureWrapper").children.length).toBe(2);
});
