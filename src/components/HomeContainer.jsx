import React from "react";
import Delivery from "../img/fddlogo.png";

const HomeContainer = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
			<div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
				<div className="flex items-center gap-2 justify-center bg-delBg px-4 py-1 rounded-full">
					<p className="text-base text-green-700 font-semibold">
						Bike Delivery
					</p>
					<div className="bg-white w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
						<img
							src={Delivery}
							alt="delivery"
							className="w-full h-full object-contain"
						/>
					</div>
				</div>

				<p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
					A entrega mais rápida em{" "}
					<span className="text-green-600 text-[3rem] lg:text-[5rem]">
						sua cidade
					</span>
				</p>

				<p className="text-base text-textColor text-center md:text-left md:w-[80%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
					ipsam illo quasi dolorem adipisci assumenda ducimus
					laudantium labore voluptates, dignissimos perferendis et
					neque consequuntur nesciunt asperiores, cupiditate quod
					culpa. Blanditiis!
				</p>

				<button
					type="button"
					className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
				>
					Fazer Pedido
				</button>
			</div>
			<div className="py-2 bg-blue-400 flex-1"></div>
		</div>
	);
};

export default HomeContainer;
