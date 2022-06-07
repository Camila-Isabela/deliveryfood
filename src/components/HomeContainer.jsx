import React from "react";
import HomeBg from "../img/moto1.jpg";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          O Delivery mais rápido em{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Sua cidade
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Os melhores pedidos no melhor tempo! 😋
        </p>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HomeBg}
          className=" ml-auto h-320 w-full lg:w-auto lg:h-420"
          alt="hero-bg"
        />
      </div>
    </section>
  );
};

export default HomeContainer;