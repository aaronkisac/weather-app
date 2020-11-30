import moment from "moment";

export const addDaysAndFormat = (date, days = 0) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return moment(result).format("DD");
};

export const getWeatherDays = (weathersList, numberOfDays = 5) => {
  let list = [];
  const hour = moment(weathersList?.currentWeather?.time).format("HH");

  for (let index = 0; index < numberOfDays; index++) {
    const tempList = weathersList.list
      ?.filter(
        (item) =>
          addDaysAndFormat(item.dt_txt) ===
          addDaysAndFormat(moment(), hour >= 21 ? index + 1 : index)
      )
      ?.reduce((a, b) => {
        return a.main.temp > b.main.temp ? a : b;
      });

    list.push({
      id: tempList?.dt,
      temp_max: tempList?.main?.temp,
      time: tempList?.dt_txt,
      weather: {
        description: tempList?.weather[0]?.description,
        icon: tempList?.weather[0]?.icon,
        id: tempList?.weather[0]?.id,
        main: tempList?.weather[0]?.main,
      },
    });
  }

  return list;
};
