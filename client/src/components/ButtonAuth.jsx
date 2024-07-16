function ButtonAuth({children}) {
    return (
        <button type="submit" className="bg-color-4 rounded-lg px-2 py-2  text-color-12 hover:bg-color-5 hover:text-black transition-all sm:w-[50%] mx-auto sm:py-3">
            {children}
        </button>
    )
}

export default ButtonAuth
