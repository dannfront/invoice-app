
import { useState } from "react";
import { Link } from "react-router-dom"

function HeaderLayout() {
    const [isDark,setIsDark]=useState(false)

    function changeTheme(){
        document.querySelector("html").classList.toggle("dark")
        setIsDark(value=>!value)
    }


    return (
        <header className="sticky top-0 transition-all bg-color-14 flex justify-between items-center w-full pr-5 lg:flex-col lg:rounded-r-2xl lg:p-0 lg:top-auto">
            <nav>
                <div className="flex justify-center items-center bg-color-1 size-[5rem] p-1 rounded-r-2xl">
                    <Link to="/">
                        <img src="/images/logo.svg" className="w-[35px]" alt="logo" />
                    </Link>
                </div>
            </nav>
            <div className="flex justify-center items-center lg:flex-col lg:pb-5">
                <button aria-label="Change theme" onClick={changeTheme}>
                    <img src={isDark?'/images/icon-sun.svg':'/images/icon-moon.svg'} className="size-5" alt="Change theme" />
                </button>

                <div className="border-l border-color-15 h-[4.9rem] ml-10 pr-5 lg:rotate-[450deg] lg:m-0 lg:p-0"></div>

                <img src="/images/image-avatar.jpg" className="size-10 rounded-full" alt="User avatar" />
            </div>
        </header>
    )
}

export default HeaderLayout
