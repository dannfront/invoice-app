function MainAuth({children}) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <main className=" bg-color-12 p-5 rounded-xl w-[90%] h-[400px] sm:w-[25rem]">
                {children}
            </main>
        </div>
    )
}

export default MainAuth
