import { useState } from "react"
import { Calendar } from "primereact/calendar"
import { useForm } from 'react-hook-form';
import ItemsInvoice from "./ItemsInvoice"
import InputsForm from "./InputsForm"
import { defaultsValues } from "../utils/defaultsValues";
import ButtonBack from "./ButtonBack";
import { createData } from "../utils/createData";
import FooterForm from "./FooterForm";
import useGetUserAuth from "../hooks/useGetUserAuth";
import useUpdateInvoice from "../hooks/useUpdateInvoice";
import PaymentsTerms from "./PaymentsTerms";

function FormEdit({ type, invoice, setState }) {

    const { data: id } = useGetUserAuth()
    const mutate = useUpdateInvoice(type)
    const [paymentDate, setPaymentDate] = useState(7)
    const defaultValues = type === "edit" ? defaultsValues(invoice) : {}
    const { register, handleSubmit } = useForm({ defaultValues })
    const [date, setDate] = useState(invoice?.createdAt ? new Date(invoice.createdAt) : new Date())
    const [newItem, setNewItem] = useState(invoice?.items ?? [])

    function addItem(e) {
        e.preventDefault()
        setNewItem(arr => [...arr, { value: null }])
    }

    function onSubmit(data, isDraft) {

        const idEditOrNew = type !== "edit" ? id : invoice._id
        const total = newItem.reduce((acc, item) => (item.price * item.qty) + acc, 0)
        const newData = createData({data, date, newItem, total, isDraft, invoice,paymentDate})
        
        mutate.mutate({ newData, idEditOrNew, type })

        setState(false)
    }

    return (
        <>
            <header className="pl-7">
                <ButtonBack handler={() => setState(false)} />

                <h2 className="mt-5 font-bold text-3xl dark:text-color-12">{type !== "edit" ? "New Invoice" : "Edit Invoice"}</h2>
            </header>

            <form className="mt-10 space-y-5 px-7" onSubmit={handleSubmit(onSubmit)} id="invoiceForm">
                <h2 className="font-bold text-color-1">Bill From</h2>

                <InputsForm idFor="street" label="Street Address">
                    <input className="inputs-form w-full" type="text" id="street" {...register("street")} />
                </InputsForm>


                <InputsForm className="flex gap-5">
                    <div>
                        <label htmlFor="city" className="text-color-7">City</label>
                        <input type="text" id="city" className="inputs-form w-full" {...register("city")} />
                    </div>
                    <div>
                        <label htmlFor="PostCode" className="text-color-7">Post Code</label>
                        <input type="text" id="PostCode" className="inputs-form w-full" {...register("postCode")} />
                    </div>
                </InputsForm>

                <InputsForm idFor="country" label="Country">
                    <input type="text" id="country" className="inputs-form w-full" {...register("country")} />
                </InputsForm>

                <h2 className="font-bold text-color-1">Bill To</h2>

                <InputsForm idFor="clientName" label="Client’s Name">
                    <input type="text" id="clientName" className="inputs-form w-full" {...register("clientName")} />
                </InputsForm>

                <InputsForm idFor="clientEmail" label="Client’s Email">
                    <input type="email" id="clientEmail" className="inputs-form w-full" {...register("clientEmail")} />
                </InputsForm>

                <InputsForm idFor="clientStreet" label="Street Address">
                    <input type="text" id="clientStreeet" className="inputs-form w-full" {...register("streetClient")} />
                </InputsForm>

                <InputsForm className="flex gap-5">
                    <div>
                        <label htmlFor="clientCity" className="text-color-7">City</label>
                        <input type="text" id="clientCity" className="inputs-form w-full" {...register("cityClient")} />
                    </div>
                    <div>
                        <label htmlFor="clientPostCode" className="text-color-7">Post Code</label>
                        <input type="text" id="clientPostCode" className="inputs-form w-full" {...register("postCodeClient")} />
                    </div>
                </InputsForm>

                <InputsForm idFor="clientCountry" label="Country">
                    <input type="text" id="clientCountry" className="inputs-form w-full" {...register("countryClient")} />
                </InputsForm>

                <div>
                    <label htmlFor="date" className="text-color-7">Invoice Date</label>
                    <Calendar showIcon value={date} onChange={(e) => setDate(e.value)} />
                </div>

                <InputsForm label="Payments Terms">
                    <PaymentsTerms setState={setPaymentDate} paymentDate={paymentDate}/>
                </InputsForm>

                <InputsForm idFor="projectDescription" label="Project Description">
                    <input type="text" id="projectDescription" className="inputs-form w-full" {...register("description")} />
                </InputsForm>

                <h2 className="font-bold text-color-1">Item List</h2>

                <ul>
                    {newItem.map((item, i) => (

                        <ItemsInvoice item={item} setItems={setNewItem} newItem={newItem} id={i} key={i} />
                    ))}
                </ul>



                <button className='font-bold text-color-7 bg-color-16 p-3 w-full rounded-xl dark:bg-color-4 dark:text-color-5' onClick={(e) => addItem(e)}>
                    + Add New Item
                </button>
            </form>

            <FooterForm setState={setState} onSubmit={handleSubmit(onSubmit)} type={type} isDraft="draft" />
        </>
    )
}

export default FormEdit
