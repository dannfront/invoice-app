import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteInvoice } from "../utils/invoicesQuery"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function useDeleteInvoices() {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const mutate = useMutation({
        mutationFn: deleteInvoice,
        onSuccess: () => {
            toast.success("successfully deleted")
            queryClient.invalidateQueries({ queryKey: ["invoices"] })
            navigate('/')
        },
        onError:()=>{
            toast.error('could not be deleted')
        }
    })

    return (
        mutate
    )
}

export default useDeleteInvoices
