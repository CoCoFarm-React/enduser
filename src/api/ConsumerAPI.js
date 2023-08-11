import axios from "axios"
import { createSearchParams } from "react-router-dom"


export const getList = async (queryObj) => {

    const queryString = createSearchParams(queryObj).toString();
  
    const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)
  
    return res.data
}


export const getOne = async (bno) => {

  const res = await axios.get(`http://localhost:8080/api/board/${bno}`)

  return res.data
}

    // const res = await axios.get(`http://localhost:8080/api/board/${bno}`)
  
    // return res.data



export const deleteBoard = async (bno) => {

    const res = await axios.delete(`http://localhost:8080/api/board/${bno}`)
  
    return res.data
}
  

export const putBoard = async (formData) => {
  
    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
}

export const getFarmerList = async (queryObj) =>{

    const queryString = createSearchParams(queryObj).toString();
    
    const res = await axios.get(`http://localhost:8080/api/admin/farmer?${queryString}`)
  
    return res.data
    
  }
