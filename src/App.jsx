import "./App.css";
import Image from "../src/assets/sofa.svg";
import Image2 from "../src/assets/sofa2.gif";
import Image3 from "../src/assets/360.svg";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);

  const handleClickImage = () => {
    setState(!state);
  };
  return (
    <div className="bg-[#D9CDF7] fixed h-full w-full grid grid-cols-2 p-10 sm:p-0">
      <div className="col-span-2 sm:col-span-1 flex items-end sm:items-center justify-center">
        <div className="flex items-start flex-col w-full relative">
          <div className="flex justify-end w-full absolute">
            <Tooltip title="Gire 360" arrow>
              <IconButton onClick={handleClickImage}>
                <img src={Image3} alt="icon" />
              </IconButton>
            </Tooltip>
          </div>
          {state ? (
            <>
              <img src={Image2} alt="sofa" className="w-full" />
            </>
          ) : (
            <>
              <img src={Image} alt="sofa" className="w-full" />
            </>
          )}
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1  flex items-start sm:items-center justify-start text-[#271A45]">
        <div className="flex items-start flex-col gap-4">
          <p className="font-light font-Lato text-sm">CÓDIGO: 42404</p>
          <p className="font-Crimson font-bold text-4xl sm:text-5xl">
            Sofá Margot II - Rosé
          </p>
          <p className="font-light font-Lato text-lg ">R$ 4.000 </p>
          <div className="w-full flex items-center justify-center sm:justify-start">
            <button className="transition ease-in-out border-2 hover:scale-110 p-3 rounded-full font-Lato hover:bg-[#271A45] hover:text-white border-[#271A45]">
              ADICIONAR À CESTA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
