import React from 'react'
import Logo from "./img/fddlogo.png"

function Header() {
    return (
        <header className="fixed z-50 w-screen p-6 px16">           
           {/* desktop & tablet */}
                <div className="hidden md:flex w-full h-full ">
                    <div className="flex items-center gap-2">
                        <img src={Logo} className=" w-24 object-cover" alt="logo" />
                        <p className='text-headingColor text-xl font-bold'>
                            dFood
                        </p>
                    </div>

                    <ul className="flex items-center gap-8 ml-auto">
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Quem somos</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Serviço</li>
                        
                    </ul>

                </div>

           {/* mobile */}
                <div className="flex md:hidden w-full h-full bg-blue-500 p-4">
                    mobile
                </div>

        </header>
    )
}

export default Header
