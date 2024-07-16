import ItemsList from "./ItemsList";

function TotalInvoice({ invoice }) {
    const { items } = invoice;
    const total=items.reduce((acc,item)=>(item.quantity*item.price)+acc,0)
    
    return (
        <>
            <div className="bg-color-5 p-5 rounded-t-lg mt-10 dark:bg-color-3">

                <table className="bg-color-5 w-full dark:bg-color-3">
                    <thead className="hidden md:table-header-group">
                        <tr className="text-left text-color-7">
                            <th className="font-normal dark:text-color-5">Item Name</th>
                            <th className="text-center font-normal dark:text-color-5">QTY.</th>
                            <th className="text-right font-normal dark:text-color-5">Price</th>
                            <th className="text-right font-normal dark:text-color-5">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, i) => <ItemsList item={item} key={i} />)}
                    </tbody>
                </table>

            </div>
            <section className="bg-color-draft rounded-b-lg text-white p-5 flex justify-between items-center dark:bg-black">
                <p>Amount Due</p>
                <p className="font-bold text-3xl">£ {total}</p>
            </section>

        </>
    )
}

export default TotalInvoice
