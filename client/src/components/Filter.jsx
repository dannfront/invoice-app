import { useState } from "react"

function Filter({ stateFilter, filters }) {
    const [isOpen, setIsOpen] = useState(false)

    function hanndleFilter(value) {

        if (filters.includes(value)) return stateFilter(item => item.filter(item => item !== value))

        stateFilter(arr => [...arr, value])
    }

    function handleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative sm:w-[150px]">
            <button className="flex items-center gap-5" onClick={(e) => handleOpen(e)}>
                <p className="font-bold dark:text-color-12">
                    Filter <span className=" hidden sm:inline-block">by status</span>
                </p>

                <img src="./images/icon-arrow-down.svg" alt="icon-arrow" />
            </button>

            {isOpen && <ul className="absolute right-[-50%] bg-color-12 p-5 w-[150px] rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] sm:right-0 dark:bg-color-4">
                <li className="op flex gap-3" >
                    <input type="checkbox" className="checkbox-input" defaultChecked={filters.includes("draft")}  id="draft" />
                    <label htmlFor="draft" className=" cursor-pointer dark:text-color-12" onClick={() => hanndleFilter('draft')}  >Draft</label>
                </li>
                <li className="op flex gap-3">
                    <input type="checkbox" className="checkbox-input" defaultChecked={filters.includes("pending")} id="pending" />
                    <label htmlFor="pending" className=" cursor-pointer dark:text-color-12" onClick={() => hanndleFilter('pending')}>Pending</label>
                </li>
                <li className="op flex gap-3" >
                    <input type="checkbox" defaultChecked={filters.includes("paid")} id="paid" className="checkbox-input" />
                    <label htmlFor="paid" className="checkbox-label cursor-pointer dark:text-color-12" onClick={() => hanndleFilter('paid')}>Paid</label>
                </li>
            </ul>}
        </div>
    )
}

export default Filter
