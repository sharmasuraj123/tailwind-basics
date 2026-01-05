import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-blue-100">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message1
          </button>
        </div>

        <div className="bg-blue-200">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message2
          </button>
        </div>

        <div className="bg-blue-300">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message3
          </button>
        </div>

        <div className="bg-blue-400">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message4
          </button>
        </div>

        <div className="bg-blue-500">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message5
          </button>
        </div>

        <div className="bg-blue-600">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message6
          </button>
        </div>

        <div className="bg-blue-700">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message7
          </button>
        </div>

        <div className="bg-blue-800">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message8
          </button>
        </div>

        <div className="bg-blue-900 col-span-2">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message9
          </button>
        </div>

        <div>
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message
          </button>
        </div>
        ;
        <div>
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message
          </button>
        </div>
        ;
      </div>
    </>
  );
}

export default App;
