import React from "react";
import Logo from "./img/fddlogo.png";
import Avatar from "./img/avatar2.png"
import { MdShoppingBasket } from "react-icons/md";

function Header() {
	return (
		<header className="fixed z-50 w-screen p-6 px-16">
			{/* desktop & tablet */}
			<div className="hidden md:flex w-full h-full items-center justify-between">
				<div className="flex items-center gap-2">
					<img src={Logo} className=" w-24 object-cover" alt="logo" />
					<p className="text-headingColor text-xl font-semibold">
						dFood
					</p>
				</div>

				<div className="flex items-center gap-8">
					<ul className="flex items-center gap-8">
						<li className="font-light text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Home
						</li>
						<li className="font-light text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Menu
						</li>
						<li className="font-light text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Quem somos
						</li>
						<li className="font-light text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Serviço
						</li>
					</ul>

					<div className="relative flex items-center justify-center">
						<MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
						<div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-activeText flex items-center justify-center">
							<p className="text-xs text-white font-semibold">
								2
							</p>
						</div>
					</div>

                    <img src={Avatar} className="w-10 min-w[40px] h-10 min-h[40px] shadow-" alt="Perfil do usuário" />

				</div>
			</div>

			{/* mobile */}
			<div className="flex md:hidden w-full h-full ">mobile</div>
		</header>
	);
}

export default Header;
