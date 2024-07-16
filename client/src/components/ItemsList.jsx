function ItemsList({ item }) {
    return (
        <tr className="grid-invoice-data md:table-row">
            <td className="font-bold dark:text-color-12">{item.name}</td>
            <td className="two text-left md:text-center text-color-7 font-bold dark:text-color-5"> <span className="md:hidden">{item.quantity}x £{item.price}</span> <span className="hidden md:block">{item.quantity}</span></td>
            <td className="text-right hidden md:block text-color-7 font-bold dark:text-color-5">£ {item.price}</td>
            <td className="three md:text-right font-bold dark:text-color-12">£{item.total}</td>
        </tr>
    )
}

export default ItemsList
