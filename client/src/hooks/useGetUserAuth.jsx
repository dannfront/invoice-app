import { useQuery } from "@tanstack/react-query"
import { getUserAuth } from "../utils/invoicesQuery"

function useGetUserAuth() {
    const query=useQuery({
        queryKey:["userAuth"],
        queryFn:getUserAuth
    })

    return query
}

export default useGetUserAuth
