import { useState } from "react"
import Filter from "./Filter"
import InvoiceForm from "./InvoiceForm"

function InvoiceBar({ invoiceLength, setFilter, filter }) {
    const [newInvoice, setNewInvoice] = useState(false)
    return (
        <>
            <section className="flex items-center justify-between mt-5 lg:mt-10">
                <div className="flex flex-col font-bold text-3xl dark:text-color-12">
                    Invoices
                    <span className=" font-normal text-base dark:text-color-5">
                        {invoiceLength ? `${invoiceLength} invoices` : "no invoice"}
                    </span>
                </div>

                <div className="flex justify-between items-center gap-10">
                    <Filter stateFilter={setFilter} filters={filter} />
                    <button onClick={() => setNewInvoice(true)} className="flex flex-row-reverse gap-2 items-center bg-color-1 rounded-3xl text-color-12 transition-all py-2 px-2 hover:bg-color-2">
                        New <span className="hidden sm:block">Invoice</span>
                        <div className="flex justify-center items-center bg-color-12 size-5 rounded-full">
                            <img src="./images/icon-plus.svg" alt="icon plus" />
                        </div>

                    </button>
                </div>
            </section>

            {newInvoice&&<InvoiceForm setState={setNewInvoice}/>}
        </>
    )
}

export default InvoiceBar
