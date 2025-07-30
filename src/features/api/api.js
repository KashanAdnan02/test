import axios from "axios"






export const fetchAll = async(apiUrl)=>{

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}${apiUrl}`,{
        headers:{
            "Content-Type": "application/json"
        }
    } )

    return response.data
  
}