import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/fddlogo.png";
import Avatar from "../img/avatar2.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function Header() {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const [{ user }, dispatch] = useStateValue();

	const [isMenu, setIsMenu] = useState(false);

	async function login() {
		if (!user) {
			const {
				// eslint-disable-next-line no-unused-vars
				user: { refreshToken, providerData },
			} = await signInWithPopup(firebaseAuth, provider);
			dispatch({
				type: actionType.SET_USER,
				user: providerData[0],
			});
			localStorage.setItem("user", JSON.stringify(providerData[0]));
		} else {
			setIsMenu(!isMenu);
		}
	}

    function logout() {
        setIsMenu(false)
        localStorage.clear()
        dispatch({
            type: actionType.SET_USER,
            user: null
        })
    }

	return (
		<header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
			{/* desktop & tablet */}
			<div className="hidden md:flex w-full h-full items-center justify-between">
				<Link to={"/"} className="flex items-center gap-2">
					<img src={Logo} className=" w-20 object-cover" alt="logo" />
					<p className="text-headingColor text-xl font-bold">dFood</p>
				</Link>

				<div className="flex items-center gap-8">
					<motion.ul
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 200 }}
						className="flex items-center gap-8"
					>
						<li className="font-medium text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Home
						</li>
						<li className="font-medium text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Menu
						</li>
						<li className="font-medium text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Sobre
						</li>
						<li className="font-medium text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Serviço
						</li>
					</motion.ul>

					<div className="relative flex items-center justify-center">
						<MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
						<div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-activeText flex items-center justify-center">
							<p className="text-xs text-white font-semibold">
								2
							</p>
						</div>
					</div>

					<div className="relative">
						<motion.img
							whileTap={{ scale: 0.6 }}
							src={user ? user.photoURL : Avatar}
							className="w-10 min-w[40px] h-10 min-h[40px] cursor-pointer rounded-full"
							alt="User profile"
							onClick={login}
						/>
						{isMenu && (
							<motion.div
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
							>
								{user &&
									user.email ===
										"camila.1920478300067@faeterj-rio.edu.br" && (
										<Link to={"/createItem"}>
											<p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base ">
												New Item <MdAdd />
											</p>
										</Link>
									)}
								<p
									className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
									onClick={logout}
								>
									Logout <MdLogout />
								</p>
							</motion.div>
						)}
					</div>
				</div>
			</div>

			{/* mobile */}
			<div className="flex items-center justify-between md:hidden w-full h-full ">
				<Link to={"/"} className="flex items-center gap-2">
					<img src={Logo} className=" w-20 object-cover" alt="logo" />
					<p className="text-headingColor text-xl font-bold">dFood</p>
				</Link>

				<div className="relative">
					<motion.img
						whileTap={{ scale: 0.6 }}
						src={user ? user.photoURL : Avatar}
						className="w-10 min-w[40px] h-10 min-h[40px] cursor-pointer rounded-full"
						alt="User profile"
						onClick={login}
					/>
					{isMenu && (
						<motion.div
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.6 }}
							className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
						>
							{user &&
								user.email ===
									"camila.1920478300067@faeterj-rio.edu.br" && (
									<Link to={"/createItem"}>
										<p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base ">
											New Item <MdAdd />
										</p>
									</Link>
								)}

							<ul className="flex flex-col ">
								<li className="font-medium text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
									Home
								</li>
								<li className="font-medium text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
									Menu
								</li>
								<li className="font-medium text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
									Sobre
								</li>
								<li className="font-medium text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
									Serviço
								</li>
							</ul>

							<p
								className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
								onClick={logout}
							>
								Logout <MdLogout />
							</p>
						</motion.div>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
