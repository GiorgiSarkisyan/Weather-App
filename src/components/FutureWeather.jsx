/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useFetchFutWeather } from "../hooks/useFetchWeather";
import Box from "./atoms/Box";
import { CityContext } from "../context/CityContext";
import { LoaderContext } from "../context/LoaderContext";

const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date
    .toLocaleDateString("en-US", options)
    .replace(/(\d{4}|\d{1,2} )/, "")
    .trim();
};

export default function FutureWeather({ data }) {
  if (!data) return null;

  const list = data.list || [];

  const filteredData = list
    .filter((item) => {
      const date = new Date(item.dt_txt);
      return date.getHours() === 12;
    })
    .slice(0, 5);

  const hourData = list.slice(1, 6);

  return (
    <div className="flex gap-20">
      <Box classes="h-[414px] w-[450px] p-5">
        <h2 className="select-none w-full text-center font-poppins h-12 text-3xl font-bold flex items-center justify-center">
          5 Days Forecast:
        </h2>
        {filteredData.map((data, index) => (
          <div key={index} className="flex justify-between">
            <img
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt={data.weather[0].description}
              className="w-16 h-16 select-none"
            />
            <span className="select-none font-poppins text-xl font-semibold flex justify-center items-center ">
              {parseFloat(Math.round(data.main.temp - 273.15).toFixed(2))}°C
            </span>
            <span className="select-none font-poppins text-xl font-semibold flex min-w-[170px] justify-center items-center">
              {formatDate(new Date(data.dt_txt))}
            </span>
          </div>
        ))}
      </Box>
      <Box classes="w-[1010px] h-[414px] p-10">
        <h2 className="font-bold font-poppins text-[40px] text-center">
          Hourly Forecast:
        </h2>
        <div className="flex justify-center gap-4">
          {hourData.map((data, index) => (
            <div
              key={index}
              className={`w-32 h-[270px] rounded-[45px] p-5 flex flex-col items-center ${
                Number(data.dt_txt.slice(11, 13)) > 12
                  ? "bg-gradient-to-b from-[#F88508] to-[#F6FAD9]"
                  : "bg-gradient-to-b from-[#443D64] to-slate-400"
              }`}
            >
              <span className="font-poppins text-2xl font-semibold">
                {data.dt_txt.slice(11, 16)}
              </span>
              <img
                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                className="w-24 h-24"
              />
              <span className="font-poppins text-[22px] mt-[-10px] font-bold">
                {parseFloat(Math.round(data.main.temp - 273.15).toFixed(2))}°C
              </span>
              <img src="/public/wind.png" />
              <span className="font-poppins font-bold">
                {data.wind.speed}km/h
              </span>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}
