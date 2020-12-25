import { useState, useEffect} from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "9dc6cce7dc919a2a7";

const useGoogleSearch = (term) => {
    
    const[data, setData] = useState(null);


    // custom hook to fetch the data
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=
                ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();   // call the function

    },[term])

    return { data }

}

export default useGoogleSearch
