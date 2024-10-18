import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#D9D9D9] to-gray-500 h-dvh w-full p-10">
      <div className="max-w-screen-2xl mx-auto h-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
