import { useParams } from "react-router-dom"
import useGetInvoices from "../hooks/useGetInvoices"
import ButtonBack from "../components/ButtonBack"
import MobileEditInvoice from "../components/MobileEditInvoice";
import SatatusInvoice from "../components/SatatusInvoice"
import SummaryInvoice from "../components/SummaryInvoice"
import Spinner from "../components/Spinner";

function Invoice() {

    const query=useGetInvoices()
    const {id}=useParams()


    if(query.isPending) return <Spinner/>

    const invoice=query.data.data.invoices.find(item=>item._id===id)
    

    return (
        <>
            <ButtonBack />

            <SatatusInvoice status={invoice.status} invoice={invoice} />

            <SummaryInvoice invoice={invoice}/>

            <MobileEditInvoice invoice={invoice}/>

        </>

    )
}

export default Invoice