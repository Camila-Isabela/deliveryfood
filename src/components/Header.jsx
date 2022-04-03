import React from 'react'
import Logo from "./img/fdlogo.jpg"

function Header() {
    return (
        <div className="fixed z-50 w-screen p-6 px16">           
           {/* desktop & tablet */}
                <div className="hidden md:flex w-full h-full ">
                    <div className="flex items-center gap-2">
                        <img src={Logo} className=" w-20  object-cover" alt="logo" />
                        <p className="text-headingColor text-xl font-bold">
                            dFood
                        </p>
                    </div>
                </div>

           {/* mobile */}
                <div className="flex md:hidden w-full h-full bg-blue-500 p-4">
                    mobile
                </div>

        </div>
    )
}

export default Header
