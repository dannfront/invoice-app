import { useState } from "react"
import useUpadateInvoiceStatus from "../hooks/useUpadateInvoiceStatus"
import ButtonsEdit from "./ButtonsEdit"
import ConfirmDelation from "./ConfirmDelation"
import InvoiceForm from "./InvoiceForm"

function MobileEditInvoice({ invoice }) {
    const [isDelete, setIsDelete] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const mutate = useUpadateInvoiceStatus()

    return (
        <footer className="sticky bottom-0 bg-color-12 md:hidden dark:bg-color-3">

            <section className="w-full flex gap-2 justify-evenly p-5">
                <ButtonsEdit onClick={() => setIsEdit(true)} type='cancel'>Edit</ButtonsEdit>
                <ButtonsEdit onClick={() => setIsDelete(true)} type='delete'>Delete</ButtonsEdit>
                {invoice.status !== "paid" && <ButtonsEdit onClick={() => mutate.mutate(invoice)} type='paid'>Mark as Paid</ButtonsEdit>}
            </section>

            {isDelete && <ConfirmDelation invoice={invoice} setState={setIsDelete} />}
            {isEdit && <InvoiceForm type="edit" invoice={invoice} setState={setIsEdit} />}

        </footer>
    )
}

export default MobileEditInvoice
