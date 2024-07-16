function Status({ bgColor, bgColorDot, textColor, status }) {
    return (
        <div className={`${bgColor} w-[120px] py-1 px-3 flex items-center justify-center gap-2 rounded-lg ml-auto`}>
            <div className={`size-3 rounded-full ${bgColorDot}`}></div>
            <p className={`font-bold ${textColor} text-xl`}>{status}</p>
        </div>
    )
}

export default Status
