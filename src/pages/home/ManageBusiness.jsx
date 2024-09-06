import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManageBusiness = ({ id, icon, title, desc }) => {
  return (
    <div className="w-96 h-72 shadow-xl p-4 bg-slate-50 hover:shadow-inner" key={id}>
      <FontAwesomeIcon icon={icon} className="bg-amber-400 text-white p-3 text-3xl rounded" />
      <p className="pt-7 pb-3 font-bold text-xl">{title}</p>
      <p>{desc}</p>
    </div>
  );
};

export default ManageBusiness;
