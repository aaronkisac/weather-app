import { render } from "@testing-library/react";
import App from "./App";

test("should render App component", () => {
  const wrapper = render(<App />);
  expect(wrapper.getByTestId("appWrapper")).toBeInTheDocument();
});
