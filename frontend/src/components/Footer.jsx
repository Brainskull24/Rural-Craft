import React from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  my-10 mt-40 text-sm">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-5">
            <div className="craft-heading text-2xl text-craft-brown">
              🏺 <span className="text-craft-rust">Rural</span>Crafts
            </div>
          </Link>
          <p className="w-full md:2/3 text-craft-earth">
            RuralCrafts connects you directly with talented rural artisans, bringing authentic handcrafted items to your doorstep while supporting traditional craftsmanship.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="Delivery" className="pointer-events-none">
                Delivery
              </Link>
            </li>
            <li>
              <Link to="Privacy_policy" className="pointer-events-none">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              Phone: <Link to="tel:+919191919191">+91 9191919191</Link>
            </li>
            <li>
              Email:{" "}
              <Link to="mailto:chahak@gmail.com">
                chahak@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2025 @RuralCrafts.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
