import { Link } from "react-router-dom";
import {splitDate} from '../utils/splitDate'
import Status from "./Status";
import { baseColor } from "../utils/getStatusBase";


function ItemInvoice({ invoice }) {
    const { _id, paymentDue, status, clientName, items } = invoice

    const { bgColor, bgColorDot, textColor } = baseColor(status)
    const total = items.reduce((acc, item) => (item.price * item.quantity) + acc, 0)

    // console.log(items.reduce((acc,item)=>(item.price*item.quantity)+acc,0));
    // console.log(items);
    // const bgColorDot={
    //     paid:"bg-color-paid",
    //     draft:"bg-color-draft",
    //     pending:"bg-color-pending"
    // }[status]


    return (
        <li className="bg-color-12 w-full p-7 rounded-xl mb-5 cursor-pointer dark:bg-color-4">
            <Link to={`/invoice/${_id}`}>
                <article className="grid grid-cols-2 gap-y-5 md:grid-cols-[65px_1fr_1fr_1fr]">

                        <h2 className="font-bold dark:text-color-12">#{_id.slice(0,5)}</h2>
                        <p className="text-color-6 ml-auto md:mr-auto dark:text-color-12">{clientName}</p>
                    
                    <div className="md:flex md:justify-between">
                        <time className="text-color-6 dark:text-color-5" dateTime={paymentDue}>Due <span className="text-color-7 dark:text-color-5">{splitDate(paymentDue)}</span></time>
                        <p className="font-bold dark:text-color-12">£ {total}</p>
                    </div>
                    
                    <Status bgColor={bgColor} bgColorDot={bgColorDot} textColor={textColor} status={status}/>

                </article>
            </Link>
        </li>
    )
}

export default ItemInvoice
