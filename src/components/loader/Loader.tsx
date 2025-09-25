// src/components/Loader.tsx
import React from "react";// put your loader image inside src/assets
import { logo } from "../../exports";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img src={logo} alt="Loading..." className="w-20 h-20" />
    </div>
  );
};

export default Loader;
