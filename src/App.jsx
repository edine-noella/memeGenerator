import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex  max-w-screen-xl mx-auto px-20 justify-between ">
          <label className="text-xl py-10">
            Top Text<br></br>
            <input
              className="border border-gray-300 text-gray-500  rounded-lg focus:ring-gray-500 focus:border-gray-900  w-96 p-2.5 "
              type="text"
              placeholder="Shut Up"
            ></input>
          </label>
          <label className="text-xl py-10">
            Bottom Text<br></br>
            <input
              className="border border-gray-300 text-gray-500  rounded-lg focus:ring-gray-500 focus:border-gray-900  w-96 p-2.5 "
              type="text"
              placeholder="And Take My money"
            ></input>
          </label>
        </div>
        <div className="max-w-screen-xl mx-auto items-center justify-center flex">
          <button className=" text-white font-semibold text-lg bg-gradient-to-r from-[#682381] to-[#A326CE]  rounded-lg  px-5 py-2.5 w-11/12 ">
            Get a new meme image 🖼
          </button>
        </div>

        <div className="mt-10 max-w-screen-xl mx-auto flex items-center justify-center">
          <img
            src="data:image/jpeg;base64,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"
            className="w-10/12 h-96"
            alt="meme"
          ></img>
        </div>
      </div>
    </>
  );
}

export default App;