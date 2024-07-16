import TotalInvoice from "./TotalInvoice"
import { splitDate } from "../utils/splitDate"

function SummaryInvoice({ invoice }) {

    return (
        <section className="bg-color-12 rounded-xl my-5 p-10 lg:overflow-y-scroll lg:h-[400px] dark:bg-color-4">
            <div className="mb-5 space-y-5 md:flex md:justify-between md:items-center">
                <header>
                    <h2 className="font-bold dark:text-color-12">#{invoice._id}</h2>
                    <h3 className="text-color-7 dark:text-color-5">{invoice.description}</h3>
                </header>

                <address>
                    <p className="text-color-7 dark:text-color-5">{invoice.senderAddress.street}</p>
                    <p className="text-color-7 dark:text-color-5">{invoice.senderAddress.city}</p>
                    <p className="text-color-7 dark:text-color-5">{invoice.senderAddress.postCode}</p>
                    <p className="text-color-7 dark:text-color-5">{invoice.senderAddress.country}</p>
                </address>

            </div>

            <article className="wraper-invoice-data md:space-y-0">
                <section className="one">
                    <h2 className="text-color-7 dark:text-color-5">Invoice Date</h2>
                    <time className="font-bold dark:text-color-12">{splitDate(invoice.createdAt)}</time>
                </section>

                <section className="two">
                    <h2 className="text-color-7 dark:text-color-5">Bill To</h2>
                    <h3 className="font-bold dark:text-color-12">{invoice.clientName}</h3>
                    <address>
                        <p className="text-color-7 dark:text-color-5">{invoice.clientAddress.street}</p>
                        <p className="text-color-7 dark:text-color-5">{invoice.clientAddress.city}</p>
                        <p className="text-color-7 dark:text-color-5">{invoice.clientAddress.postCode}</p>
                        <p className="text-color-7 dark:text-color-5">{invoice.clientAddress.country}</p>
                    </address>
                </section>

                <section className="tree">
                    <h2 className="text-color-7 dark:text-color-5">Payment Due</h2>
                    <time className="font-bold dark:text-color-12">{splitDate(invoice.paymentDue)}</time>
                </section>

                <section className="four">
                    <h2 className="text-color-7 dark:text-color-5">Sent to</h2>
                    <h3 className="font-bold dark:text-color-12">{invoice.clientEmail}</h3>
                </section>
            </article>

            <TotalInvoice invoice={invoice}/>

        </section>
    )
}

export default SummaryInvoice
