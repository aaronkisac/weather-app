import { render } from "@testing-library/react";
import TempIcon from "./TempIcon";
import { item } from "../mockData";

test("should render TempIcon component", () => {
  const wrapper = render(
    <TempIcon
      icon={item.foreCastList[0].weather.icon}
      description={item.foreCastList[0].weather.description}
    />
  );
  expect(wrapper.getByTestId("tempIconWrapper")).toBeInTheDocument();
});

test("should render the description in TempIcon component", () => {
  const wrapper = render(
    <TempIcon
      icon={item.foreCastList[0].weather.icon}
      description={item.foreCastList[0].weather.description}
    />
  );
  expect(wrapper.getByText("LIGHT RAIN")).toBeInTheDocument();
});

test("should render 2 children in the TempIcon component", () => {
  const wrapper = render(<TempIcon />);
  expect(wrapper.getByTestId("tempIconWrapper").children.length).toBe(2);
});

test("should render 5 children in the TempIcon component", () => {
  const wrapper = render(
    <TempIcon
      icon={item.foreCastList[0].weather.icon}
      description={item.foreCastList[0].weather.description}
    />
  );
  expect(wrapper.getByTestId("tempIconImg").src).toBe(
    "https://openweathermap.org/img/wn/10n.png"
  );
});
