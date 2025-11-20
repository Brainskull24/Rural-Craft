import React from "react";
import { toast } from "react-toastify";

const NewsletterBox = () => {
  // developer note hahaha i am calling myself a developer ha so i am injoying myself making this so yeah lets see some time later
  const onSubmitHandler = (event) => {
    event.preventDefault();
    toast.success("Subscribed to newsletter successfully");
  };

  return (
    <div className="text-center bg-craft-cream py-12 rounded-lg border-2 border-craft-tan">
      <p className="text-2xl craft-heading text-craft-brown">
        Subscribe & Support Artisans
      </p>
      <p className="text-craft-earth mt-3">
        Subscribe to our newsletter for updates on new handcrafted items, artisan stories, and exclusive offers.
        <br /> No spam, we promise.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-2 border-craft-tan pl-3 rounded-lg bg-white overflow-hidden"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none px-2"
          required
        />
        <button
          type="submit"
          className="bg-craft-brown hover:bg-craft-rust text-white text-xs px-10 py-4 transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
