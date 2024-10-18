import { useContext, useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CityContext } from "../context/CityContext";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { city, setCity } = useContext(CityContext);
  const [inputValue, setInputValue] = useState(city);

  function handleSubmit(e) {
    if (e.key === "Enter") {
      setCity(inputValue);
    }
  }

  const handleIconClick = () => {
    setCity(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex justify-between mb-16">
      <div className="flex items-center gap-2 flex-col justify-center">
        <div
          className={`w-14 h-7 flex items-center bg-gray-300 border border-zinc-600 rounded-full p-1 cursor-pointer`}
          onClick={toggleTheme}
        >
          <div
            className={`bg-black w-5 h-5 rounded-full shadow-md transform ${
              isDarkMode ? "translate-x-6" : ""
            } transition-transform duration-300`}
          />
        </div>
        <span className="text-sm font-poppins font-semibold">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
      <div className="flex items-center gap-5 w-[800px] bg-[#D9D9D9] border border-gray-500 rounded-[40px] shadow-lg shadow-gray-500 px-6">
        <span className="h-full flex items-center">
          <HiMagnifyingGlass
            className="w-10 h-11 text-gray-500 cursor-pointer"
            onClick={handleIconClick} // Update city when magnifying glass is clicked
          />
        </span>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleSubmit} // Detect Enter key press
          placeholder="Search for your preferred city..."
          className="bg-transparent text-xl font-poppins font-medium  text-gray-500 w-full h-10 focus:outline-none"
        />
      </div>
      <div className="flex h-16 w-72 bg-[#4CBB17] rounded-[40px] items-center px-4 gap-3 shadow-lg shadow-gray-500">
        <BiTargetLock className="w-9 h-9" />
        <span className="font-poppins text-white font-bold flex h-full items-center text-xl tracking-wider">
          Current Location
        </span>
      </div>
    </header>
  );
}
