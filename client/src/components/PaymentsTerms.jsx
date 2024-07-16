import { useState } from "react";

function PaymentsTerms({paymentDate, setState }) {

    const [isOpen,setIsOpen]=useState(false)

    function handlerClick(e) {
        setState(+e.target.dataset.value)
        setIsOpen(false)
    }

    return (
        <div className="relative bg-color- border border-color-5 p-2 cursor-pointer dark:bg-color-4 dark:border-color-3">
            <div className="flex justify-between items-center" onClick={()=>setIsOpen((value)=>!value)}>
                <p className=" dark:text-color-12">{paymentDate} Nexts Days</p>
                <img className="size-[10px]" src="/images/icon-arrow-down.svg" alt="" />
            </div>

            {isOpen&&<div className="absolute top-[50px] right-0 bg-color-12 w-full divide-y-[1px] divide-color-5 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] last-of-type:p-0 dark:divide-color-4 dark:bg-color-3 dark:text-color-12">
                <p data-value="1" className="hover:text-color-1 p-3" onClick={(e) => handlerClick(e)}>Next 1 Day</p>
                <p data-value="7" className="hover:text-color-1 p-3" onClick={(e) => handlerClick(e)}>Next 7 Days</p>
                <p data-value="14" className="hover:text-color-1 p-3" onClick={(e) => handlerClick(e)}>Next 14 Days</p>
                <p data-value="30" className="hover:text-color-1 p-3" onClick={(e) => handlerClick(e)}>Next 30 Days</p>
            </div>}
        </div>
    )
}

export default PaymentsTerms
