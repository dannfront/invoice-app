import { useEffect, useState } from "react"

function ItemsInvoice({item={}, setItems, id }) {

    const [itemName, setItemName] = useState(item?.name??"")
    const [qty, setQty] = useState(item?.quantity??0)
    const [price, setPrice] = useState(item?.price??0)

    useEffect(function () {
        const total=qty*price
        const data = {
            name:itemName,
            quantity:qty,
            price,
            total
        }
        updateItem(id,data)
    }, [itemName, qty, price,id])

    function deleteItem(e, id) {
        e.preventDefault()
        setItems(arr => arr.filter((_, index) => index !== id))
    }

    function updateItem(id,data){
        setItems(arr=>arr.map((item,i)=>i!==id?item:data))
    }

    return (
        <li className="mb-5 last-of-type:mb-0">
            <div>
                <label htmlFor="itemName" className="dark:text-color-12">Item Name</label>
                <input onChange={(e) => setItemName(e.target.value)} value={itemName} className="inputs-form w-full" type="text" id="itemName" />
            </div>
            <div className="flex items-center gap-5 w-full">
                <div className="flex-grow-[0]">
                    <label htmlFor="qty" className="dark:text-color-12">Qty.</label>
                    <input className="inputs-form w-[60px]" onChange={(e) => setQty(e.target.value)} value={qty} type="text" id="qty" />
                </div>
                <div className="flex-grow-[0]">
                    <label htmlFor="price" className="dark:text-color-12">Price</label>
                    <input className="inputs-form w-[60px]" onChange={(e) => setPrice(e.target.value)} value={price} type="text" id="price" />
                </div>
                <div className="flex items-end gap-2">
                    <div>
                        <p className="dark:text-color-12">Total</p>
                        <p className="dark:text-color-6">{qty * price}</p>
                    </div>
                    <button className="block" onClick={(e) => deleteItem(e, id)}>
                        <img src="/images/icon-delete.svg" alt="" />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default ItemsInvoice
