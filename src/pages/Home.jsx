import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-3xl font-bold">Current posts</h1>

      <div className="mb-4">
        <section className="h-fit bg-dat-olive p-10 text-center relative">
          <h3 className="mb-3 text-xl">Lorem Ipsum</h3>

          {/* Date */}
          <div className="absolute top-16 text-xs text-gray-500">
            18-12-2023
          </div>
          <div>

          </div>

          {/* Input Content */}
          <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
              vitae.
            </p>
          </div>
        </section>
      </div>
      
      {/* Testing how it looks with a second post */}
      <div className="mb-4">
        <section className="h-fit bg-dat-olive p-10 text-center relative">
          <h3 className="mb-3 text-xl">Title</h3>

          <div className="absolute top-0 left-0 mt-2 ml-2 text-sm text-gray-500">
            Date Created
          </div>

          <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
              vitae.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
