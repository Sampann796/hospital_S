import {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

const useFetchData = (url) => {

    const { token } = useContext(AuthContext);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchData = async()=> {

                setLoading(true)

            try {

            console.log("Token exists:", !!token);
            console.log("Token parts:", token?.split(".").length);
            console.log("Token start:", token?.slice(0, 15));

                const res = await fetch(url, {
                    headers: {
                    Authorization: `Bearer ${token}`,
                        },
                    });

            const result = await res.json()

            if(!res.ok){
                throw new Error(result.message + "NOPE")
            }

            setData(result.data);
            setLoading(false);

            } catch (error) {
                setError(null);
                setLoading(false);
                setError(error.message)
                
            }
        }
 
        fetchData()
    },[url, token])

  return {
    data, 
    loading, 
    error
  }
}

export default useFetchData
