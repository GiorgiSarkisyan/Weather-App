/* eslint-disable react/prop-types */
import { LuSunrise, LuSunset } from "react-icons/lu";
import { MdWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { ImMeter } from "react-icons/im";
import { TbUvIndex } from "react-icons/tb";
import Box from "./atoms/Box";

export default function CurWeather({ data, city }) {
  if (!data) return null;

  const localTime = data.location.localtime;
  const [date] = localTime.split(" ");

  const currentDate = new Date(date);

  const weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentWeekday = weekdayNames[currentDate.getDay()];

  const currentDay = currentDate.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonth = monthNames[currentDate.getMonth()];
  const formattedDate = `${currentWeekday}, ${currentDay} ${currentMonth}`;

  return (
    <div className="gap-20 flex">
      <Box classes="w-[550px] h-[395px] flex flex-col justify-between p-20 gap-16 items-center">
        <span className="font-poppins text-4xl font-extrabold uppercase">
          {city}
        </span>
        <div className="flex flex-col">
          <span className="font-poppins text-9xl font-extrabold">
            {localTime.split(" ")[1]}
          </span>
          <span className="w-full text-center font-poppins text-xl">
            {formattedDate}
          </span>
        </div>
      </Box>
      <Box classes="w-[960px] h-[395px] px-10 py-10 flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="text-8xl font-bold font-poppins bg-gradient-to-r from-zinc-700 to-gray-400 bg-clip-text text-transparent">
              {Math.round(data.current.temp_c)}°C
            </span>
            <span className="font-bold font-poppins text-[28px] bg-gradient-to-r from-zinc-700 to-gray-400 bg-clip-text text-transparent">
              Feels like: {Math.round(data.current.feelslike_c)}°C
            </span>
          </div>
          <div className="flex flex-col gap-6  w-50 items-center">
            <div className="flex gap-6">
              <LuSunrise className="w-16 h-16" />
              <div className="flex flex-col justify-center gap-1">
                <span className="font-poppins text-[22px] font-bold">
                  Sunrise
                </span>
                <span className="font-poppins text-[22px] font-semibold">
                  06:37 AM
                </span>
              </div>
            </div>
            <div className="flex gap-6">
              <LuSunset className="w-16 h-16" />
              <div className="flex flex-col justify-center gap-1">
                <span className="font-poppins text-[22px] font-bold">
                  Sunset
                </span>
                <span className="font-poppins text-[22px] font-semibold">
                  20:37 AM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col gap-6">
          <img
            src={data.current.condition.icon.replace(/64x64/, "128x128")}
            className="w-56 h-56"
          />
          <span className="text-zinc-900  font-poppins text-3xl font-semibold text-center">
            {data.current.condition.text === "Patchy light rain with thunder"
              ? "Rain with thunder"
              : data.current.condition.text}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col text-center justify-center items-center gap-1">
            <MdWaves className="w-20 h-20" />
            <span className="font-poppins font-semibold  text-xl">
              {data.current.humidity}%
            </span>
            <span className="font-poppins font-medium text-lg">Humidity</span>
          </div>
          <div className="flex flex-col text-center  items-center justify-center gap-1">
            <FaWind className="w-20 h-20" />
            <span className="font-poppins font-semibold text-xl">
              {data.current.wind_kph}
            </span>
            <span className="font-poppins font-medium text-lg">Wind Speed</span>
          </div>
          <div className="flex flex-col text-center  items-center justify-center gap-2">
            <ImMeter className="w-20 h-20" />
            <span className="font-poppins font-semibold text-xl">
              {data.current.pressure_mb}hPa
            </span>
            <span className="font-poppins font-medium text-lg">Pressure</span>
          </div>
          <div className="flex flex-col text-center  items-center justify-center gap-2">
            <TbUvIndex className="w-20 h-20" />
            <span className="font-poppins font-semibold text-xl">
              {data.current.uv}
            </span>
            <span className="font-poppins font-medium text-lg">UV</span>
          </div>
        </div>
      </Box>
    </div>
  );
}
