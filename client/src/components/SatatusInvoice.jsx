import { baseColor } from "../utils/getStatusBase"
import ButtonsEdit from "./ButtonsEdit"
import Status from "./Status"
import useUpadateInvoiceStatus from "../hooks/useUpadateInvoiceStatus"
import { useState } from "react"
import ConfirmDelation from "./ConfirmDelation"
import InvoiceForm from "./InvoiceForm"

function SatatusInvoice({ status, invoice }) {
    const [isDelete, setIsDelete] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const mutate = useUpadateInvoiceStatus()

    const { textColor, bgColor, bgColorDot } = baseColor(status)

    return (
        <>
            <section className="bg-color-12 rounded-xl p-5 flex items-center mt-10 md:justify-between dark:bg-color-4">
                <div className="w-full flex justify-between items-center md:gap-5 md:w-[1%]">
                    <p className="text-color-6 dark:text-color-5">Status</p>
                    <Status textColor={textColor} bgColor={bgColor} bgColorDot={bgColorDot} status={status} />
                </div>

                <div className="hidden space-x-5 md:block">
                    <ButtonsEdit onClick={() => setIsEdit(true)} type='cancel'>Edit</ButtonsEdit>
                    <ButtonsEdit onClick={() => setIsDelete(true)} type='delete'>Delete</ButtonsEdit>
                    {status !== "paid" && <ButtonsEdit onClick={() => mutate.mutate(invoice)} type='paid'>Mark as Paid</ButtonsEdit>}
                </div>
            </section>
            {isDelete && <ConfirmDelation invoice={invoice} setState={setIsDelete} />}
            {isEdit && <InvoiceForm type="edit" invoice={invoice} setState={setIsEdit} />}
        </>

    )
}

export default SatatusInvoice
