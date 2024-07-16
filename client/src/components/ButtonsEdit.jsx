function ButtonsEdit({children,type,onClick}) {

    const buttonStyle={
        paid:'bg-color-1 text-white',
        delete:'bg-color-9 text-white',
        cancel:'bg-color-16 text-color-7',
        draft:"bg-color-14 text-color-7"
        
    }[type] 

    return (
        <button onClick={onClick} className={`${buttonStyle} font-bold  rounded-full py-[12px] px-5 `}>
            {children}
        </button>
    )
}

export default ButtonsEdit
