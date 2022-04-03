import React from 'react'

function Header() {
    return (
        <div className="fixed z-50 w-screen p-6 px16">
           
           {/* desktop & tablet */}
                <div className="hidden md:flex w-full h-full ">
                    desktop
                </div>

           {/* mobile */}
                <div className="flex md:hidden w-full h-full bg-blue-500 p-4">
                    mobile
                </div>

        </div>
    )
}

export default Header
