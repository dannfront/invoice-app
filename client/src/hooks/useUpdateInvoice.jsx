import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateEditInvoice } from "../utils/invoicesQuery"
import toast from "react-hot-toast"

function useUpdateInvoice(type) {
    const queryClient=useQueryClient()
    const mutate=useMutation({
        mutationFn:updateEditInvoice,
        onSuccess:()=>{
            const createOrEdit=type==="edit"?"edit":"create"
            toast.success(`${createOrEdit} invoice`)
            queryClient.invalidateQueries({queryKey:["invoices"]})
        },
        onError:(err)=>{
            err?toast.error(err):toast.error("could not update")
        }
    })
    return mutate
}

export default useUpdateInvoice
