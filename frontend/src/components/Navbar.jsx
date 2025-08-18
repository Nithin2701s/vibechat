import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-start gap-2 ">
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Navbar;
