import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data }) => {
	console.log(data);
	return (
		<div
			className={`w-full my-12 ${
				flag ? "overflow-x-scroll" : "overflow-x-hidden"
			}`}
		>
			{data &&
				data.map((item) => (
					<div key={item.id} className="w-300 md:w-340 h-auto bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg">
						<div className="w-full flex items-center justify-between">
							<motion.img
								whileHover={{ scale: 1.2 }}
								src="https://firebasestorage.googleapis.com/v0/b/deliveryfood-5dd22.appspot.com/o/Images%2F1653052281756-i6.png?alt=media&token=f3ab1733-32ba-46e0-bd67-32af52c0f54d"
								alt=""
								className="w-40 -mt-8 drop-shadow-2xl"
							/>

							<motion.div
								whileTap={{ scale: 0.75 }}
								className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
							>
								<MdShoppingBasket className="text-white" />
							</motion.div>
						</div>

						<div className="w-full flex flex-col items-end justify-end">
							<p className="text-textColor font-semibold text-base md:text-lg">
								Sundae
							</p>
							<p className="mt-1 text-sm text-gray-500">
								120 calorias
							</p>
							<div className="flex items-center gap-8">
								<p className="text-lg text-headingColor font-semibold">
									<span className="text-sm text-red-500">
										R${" "}
									</span>
									9.99
								</p>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default RowContainer;
