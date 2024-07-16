import { useState } from "react"
import ListInvoices from "../components/ListInvoices"
import InvoicesEmpty from "../components/InvoicesEmpty"
import useGetInvoices from "../hooks/useGetInvoices"
import Spinner from "../components/Spinner"
import InvoiceBar from "../components/InvoiceBar"



function Home() {
    const [filter, setFilter] = useState([])
    const query = useGetInvoices()
    console.log(typeof import.meta.env.VITE_IS_PROD);
    if (query.isPending) return <Spinner />

    const invoices = query.data.data.invoices ?? []

    // const invoice=invoices.filter(invoice=>invoice.status===paid||invoice.status===draft||invoice.status===pending)

    const stateFill = ["paid", "draft", "pending"].filter(el => filter.includes(el))
    const invoiceFilter = invoices.filter(invoice => stateFill.includes(invoice.status))
    const invoicesUser = !invoiceFilter.length ? invoices : invoiceFilter

    return (
        <>
            <InvoiceBar invoiceLength={invoicesUser.length} setFilter={setFilter} filter={filter} />

            <section className="mt-10 lg:overflow-y-scroll lg:h-[500px]">
                {invoicesUser.length ?
                    <ListInvoices invoice={invoicesUser} />
                    :
                    <InvoicesEmpty />
                }
            </section>
        </>
    )
}

export default Home
