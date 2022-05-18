import React from "react";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {
	return (
		<div className="w-full h-auto flex flex-col items-center justify-center ">
			<HomeContainer />

			<section className="w-full my-6">

				<div className="w-full flex items-center justify-between">

					 <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
						Our fresh & healthy fruits
					 </p>

					<div className="hidden md:flex gap-3 items-center">
						<div className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"></div>
						<div className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"></div>
					</div>

				</div>

			</section>
		</div>
	);
};

export default MainContainer;
