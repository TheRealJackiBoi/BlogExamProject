import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-3xl font-bold">Current posts</h1>
      
      {/* First Inner Div */}
      <div className="mb-4">
        <section className="h-fit bg-dat-olive p-10 text-center relative">
          <h3 className="mb-3 text-xl">Title</h3>
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
      
      {/* Second Inner Div */}
      <div className="mb-4">
        <section className="h-fit bg-dat-olive p-10 text-center relative">
          <h3 className="mb-3 text-xl">Title</h3>
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
