import React from "react";
import Delivery from '../img/delivery.png'

const MainContainer = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
			<div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center">
				<div className="flex items-center gap-2 justify-center bg-green-200">
					<p>Bike Delivery</p>
					<div className="bg-white w-6 h-6 rounded-full overflow-hidden">
                        <img src={Delivery} alt="delivery" className="w-full h-full object-contain" />
                    </div>
				</div>
			</div>
			<div className="py-2 bg-blue-400 flex-1"></div>
		</div>
	);
};

export default MainContainer;
