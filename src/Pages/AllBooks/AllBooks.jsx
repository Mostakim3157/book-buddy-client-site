import { useEffect, useState } from "react";

import { CiBoxList } from "react-icons/ci";
import { FaListAlt } from "react-icons/fa";

import { IoGrid, IoGridOutline } from "react-icons/io5";

import AllBookTable from "./AllBookTable";
import AllBookCart from "./AllBookCart";

const AllBooks = () => {
  const initialView = localStorage.getItem("view") === "true";
  const [view, setView] = useState(initialView);


  useEffect(()=>{
    localStorage.setItem('view', view)
  },[view])


  const handleToggle = (e) => {
    e.preventDefault();
    setView(true);
  };
  const handleToggle1 = (e) => {
    e.preventDefault();
    setView(false);
  };

  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-x-3">
          <h2 className="text-3xl text-center font-bold  dark:text-white">
            Our All <span className="text-[#FF8C32]">Books</span>
          </h2>

          <div className=" mt-4 flex gap-2 text-2xl bg-gray-200 p-2 rounded-lg text-black">
            <button onClick={handleToggle}>
              {!view ? <IoGridOutline /> : <IoGrid />}
            </button>
            <button onClick={handleToggle1}>
              {view ? <CiBoxList /> : <FaListAlt />}
            </button>
          </div>
        </div>

        {!view ? <AllBookTable></AllBookTable> : <AllBookCart></AllBookCart>}
      </section>
    </>
  );
};

export default AllBooks;
