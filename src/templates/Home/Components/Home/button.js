import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="sign-up">
      <button className="px-3 py-1 lg:text-base bg-yellow-500 hover:bg-white">Đăng ký</button>


      
    </Link>
  );
}
