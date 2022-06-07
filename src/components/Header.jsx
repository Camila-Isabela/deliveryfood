/* eslint-disable */
import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo2.png";
import Avatar from "../img/avatar2.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

	const [isMenu, setIsMenu] = useState(false);

	const login = async () => {
		if (!user) {
			const {
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
	};

	const logout = () => {
		setIsMenu(false);
		localStorage.clear();

		dispatch({
			type: actionType.SET_USER,
			user: null,
		});
	};

	const showCart = () => {
		dispatch({
			type: actionType.SET_CART_SHOW,
			cartShow: !cartShow,
		});
	};

	return (
		<header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
			{/* desktop & tablet */}
			<div className="hidden md:flex w-full h-full items-center justify-between">
				<Link to={"/"} className="flex items-center gap-2">
					<img src={Logo} className="w-8 object-cover" alt="logo" />
					<p className="text-headingColor text-xl font-bold">dFood</p>
				</Link>

				<div className="flex items-center gap-8">
					<div
						className="relative flex items-center justify-center"
						onClick={showCart}
					>
						<IoBagOutline className="text-textColor text-2xl  cursor-pointer" />
						{cartItems && cartItems.length > 0 && (
							<div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
								<p className="text-xs text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center font-semibold">
									{cartItems.length}
								</p>
							</div>
						)}
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
								user.email === "camilaisabela26@gmail.com" ? (
									<Link to={"/createItem"}>
										<p
											className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
											onClick={() => setIsMenu(false)}
										>
											Novo Item <MdAdd />
										</p>
										<p
											className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
											onClick={logout}
										>
											Logout <MdLogout />
										</p>
									</Link>
								) : (
									<p
										className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
										onClick={logout}
									>
										Logout <MdLogout />
									</p>
								)}
							</motion.div>
						)}
					</div>
				</div>
			</div>

			{/* mobile */}
			<div className="flex items-center justify-between md:hidden w-full h-full ">
				<div
					className="relative flex items-center justify-center"
					onClick={showCart}
				>
					<IoBagOutline className="text-textColor text-2xl  cursor-pointer" />
					{cartItems && cartItems.length > 0 && (
						<div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
							<p className="text-xs rounded-full w-4 h-4 flex items-center justify-center text-white bg-red-600 font-semibold">
								{cartItems.length}
							</p>
						</div>
					)}
				</div>

				<Link to={"/"} className="flex items-center gap-2">
					<img
						src={Logo}
						className="w-12 h-12 object-cover"
						alt="logo"
					/>
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
							user.email === "camilaisabela26@gmail.com" ? (
								<Link to={"/createItem"}>
									<p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base ">
										Novo Item <MdAdd />
									</p>
									<p
										className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
										onClick={logout}
									>
										Logout <MdLogout />
									</p>
								</Link>
							) : (
								<p
									className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
									onClick={logout}
								>
									Logout <MdLogout />
								</p>
							)}
						</motion.div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
