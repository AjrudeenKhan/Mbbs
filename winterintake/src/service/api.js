
import axios from 'axios'
const URL = 'http://localhost:8000'

export const contactData = async(data) =>{
    try{
       
        return await axios.post(`${URL}/contact`,data)

    }catch(error){
        console.log("Error while calling signup api",error.response.data);
    }
}