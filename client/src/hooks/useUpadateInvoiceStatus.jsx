import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { setPaidInvoice } from "../utils/invoicesQuery"

function useUpadateInvoiceStatus() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: setPaidInvoice,
        onSuccess: () => {
            toast.success("invoice update")
            queryClient.invalidateQueries({ queryKey: ["invoices"] })
        },
        onError: () => {
            toast.error("could not update")
        }
    })

    return mutate
}

export default useUpadateInvoiceStatus
