import React from "react";
import Title from "../components/Title.jsx";
import { assets } from "../assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t-2 border-craft-tan">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="about"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-craft-earth bg-craft-cream p-6 rounded-lg border-2 border-craft-tan">
          <p className="font-bold text-craft-brown text-lg">Our Objective</p>
          <p>To empower rural craft workers by connecting them directly with customers who value authentic, handmade craftsmanship.</p>
          <b className="text-craft-brown text-lg">Our Mission</b>
          <p>
            Our mission is to preserve traditional craftsmanship, support rural artisan communities, and provide customers with unique, handcrafted items made with love and skill passed down through generations.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-4">
        <div className="border-2 border-craft-tan bg-craft-cream px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg hover:shadow-lg transition-shadow">
          <b className="text-craft-brown text-lg">Authentic Handcrafted Items</b>
          <p className="text-craft-earth">
            Every item is handmade by skilled rural artisans using traditional techniques and quality materials.
          </p>
        </div>
        <div className="border-2 border-craft-tan bg-craft-cream px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg hover:shadow-lg transition-shadow">
          <b className="text-craft-brown text-lg">Direct from Artisans</b>
          <p className="text-craft-earth">
            We connect you directly with craft workers, ensuring fair compensation and supporting rural communities.
          </p>
        </div>
        <div className="border-2 border-craft-tan bg-craft-cream px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg hover:shadow-lg transition-shadow">
          <b className="text-craft-brown text-lg">Exceptional Customer Service</b>
          <p className="text-craft-earth">
            We are here for you 24/7. Our exceptional customer service will surely impress you.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
