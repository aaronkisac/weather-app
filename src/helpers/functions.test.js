import { addDaysAndFormat, getWeatherDays } from "./functions";
import { forecastFiveDaysData } from "../components/mockData";

test("should be 5 when add 5 days to 2020-11-30 with addDaysAndFormat func", () => {
  const res = addDaysAndFormat("2020-11-30 00:58:55", 5);
  expect(res).toBe("05");
});

test("should be 4 when add 5 days to 2020-10-30 with addDaysAndFormat func", () => {
  const res = addDaysAndFormat("2020-10-30 00:58:55", 5);
  expect(res).toBe("04");
});

test("should give datas of weathers max temperature of each days for 5 days with getWeatherDays func", () => {
  const res = getWeatherDays(forecastFiveDaysData);
  expect(res.length).toBe(5);
});

test("should give datas of weathers max temperature of each days for 3 days with getWeatherDays func", () => {
  const res = getWeatherDays(forecastFiveDaysData, 3);
  expect(res.length).toBe(3);
});
