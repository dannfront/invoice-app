import ItemInvoice from "./ItemInvoice";

function ListInvoices({invoice}) {
    return (
        <ul>
            {invoice.map(invoice=> <ItemInvoice invoice={invoice} key={invoice._id}/>)}
        </ul>
    )
}

export default ListInvoices
