import { useQuery } from "@tanstack/react-query"
import { fetchAll } from "../api/api"




export const useLoanTypes = (apiUrl)=>{
    return useQuery({
        queryKey: ["GET_ALL_LOAN_TYPE"],
        queryFn: ()=>fetchAll(apiUrl)
    })
}