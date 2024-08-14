'use client'
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
  const [data, setData] = useState(null);

  
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
  return (
    <main className="flex min-h-screen flex-col bg-[#202632] items-center justify-center p-24 w-full h-screen">
      <div className="bg-[#313a49] rounded-lg relative p-10 text-center">
      {data ? (
          <>
            <h1 className="text-xs font-extrabold text-[#52ffaa]">ADVICE # {data.slip.id}</h1>
            <p className="w-56 my-5 font-extrabold text-white ">"{data.slip.advice}"</p>
          </>
        ) : (
          <ClipLoader/>
        )}
        <button onClick={fetchData} className="p-2 absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 rounded-full bg-[#52ffaa] ">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
