import { useContext } from "react";
import {
  useFetchCurWeather,
  useFetchFutWeather,
} from "../hooks/useFetchWeather";
import CurWeather from "./CurWeather";
import FutureWeather from "./FutureWeather";
import Spinner from "./atoms/Spinner";
import { CityContext } from "../context/CityContext";

export default function Main() {
  const { city } = useContext(CityContext);
  const [curData, curError, curLoading] = useFetchCurWeather(city);
  const [futData, futError, futLoading] = useFetchFutWeather(city);

  const isLoading = curLoading || futLoading;

  return (
    <main className="flex flex-col gap-20 min-h-[800px]">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : curError || futError ? (
        <p>Error: {curError || futError}</p>
      ) : (
        <>
          <CurWeather data={curData} city={city} />
          <FutureWeather data={futData} />
        </>
      )}
    </main>
  );
}
