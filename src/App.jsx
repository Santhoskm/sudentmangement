import React from "react";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx";

const App = () => {
  return (
    <div className="bg-white m-9 ">
      <div className="pl-[65px] pt-[15px]">
        <h1 className="font-bold text-2xl ">Student management system</h1>
      </div>
      <Search />
      <Home />
    </div>
  );
};

export default App;