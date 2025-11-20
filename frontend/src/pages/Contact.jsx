import React from "react";
import Title from "../components/Title.jsx";
import { assets } from "../assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

function Contact() {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t-2 border-craft-tan">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt="contact"
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col gap-6 justify-center items-start">
          <p className="font-semibold text-xl text-gray-600">Our Office</p>
          <p className="text-gray-500">
            Gandhi Nagar
            <br />
            Jaipur, Rajasthan, INDIA
          </p>
          <p className="text-gray-500">
            Tel: (+91) 9191919191 <br /> Email: chahak@gamil.com
          </p>
          <p className="font-semibold text-gray-600">
            Partner with RuralCrafts
          </p>
          <p className="text-gray-500">
            Are you a rural artisan? Join our platform and reach customers
            worldwide.
          </p>
          <button className="border-2 border-craft-brown px-8 py-4 text-sm text-craft-brown hover:bg-craft-brown hover:text-white transition-all duration-500 rounded">
            Become an Artisan Partner
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default Contact;
