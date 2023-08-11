import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"


const checkNull = (obj) => {

    const result = {}

    for(const attr in obj) {
        const attrName = attr
        const attrValue = obj[attr]

        if(attrValue && attrValue !== 'null') {
            result[attrName] = attrValue
        }
    }

    return result

}


const useQueryObj = () => {

    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate()

    console.log(search)
    
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({page, size, type, keyword})

    //list
    const moveList = () => {
        const queryString = createSearchParams (queryObj).toString()

        navigate(`/consumer/qapage`) 
    }
    //regist
    const moveRegist = () => {
        const queryString = createSearchParams (queryObj).toString()

        navigate(`regist`) 
    }
    //read
    const moveRead = (bno) => {
        console.log("moveRead: " + bno)

        const queryString = createSearchParams (queryObj).toString()

        navigate(`read/${bno}?${queryString}`)
    }
    //modify
    const moveModify = (bno) => {
        console.log("moveModify: " + bno)
    
        const queryString = createSearchParams (queryObj).toString()
    
        navigate(`/consumer/qapage/modify/${bno}?${queryString}`)
    
    }
    //delete
    const moveDelete = (bno) => {
        console.log("moveDelete: " + bno)
    
        const queryString = createSearchParams (queryObj).toString()
    
        //navigate(`consumer/qapage`)
    
    }

    return {queryObj, setSearch, moveRead, moveList, moveModify, moveDelete, moveRegist}

}
 
export default useQueryObj;