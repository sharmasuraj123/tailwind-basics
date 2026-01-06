import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 sm:bg-blue-400">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message1
          </button>
        </div>

        <div className="bg-blue-200">
          <button className=" pt-1 pb-1 px-3 py-3 m-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-3xl border-1">
            Message2
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
