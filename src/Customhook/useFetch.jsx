import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
 
    const[data1, setData1]=useState(null);
    const[loading, setLoading]=useState(false);
    const[error, setError]=useState(null);

    useEffect(() =>{
        setLoading(true);
        axios.get(url).then((response)=>{
            setData1(response.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        })
    },[url]);
    return {data1, loading, error}
}

export default useFetch
