import { useQuery } from "@tanstack/react-query"
import { getInvoices } from "../utils/invoicesQuery"

function useGetInvoices() {
    const query = useQuery({
        queryKey: ['invoices'],
        queryFn: getInvoices,
    })

    return query
}

export default useGetInvoices
