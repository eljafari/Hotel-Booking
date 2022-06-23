import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                setData(res.data);
                // res.data

            } catch (err) {
                setError(err)
            }
            setLoading(false);
        }
        fetchData();

    }, [url]);

    const ReFetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data)

        } catch (err) {
            setError(err)
        }
        setLoading(false);
    };
    return { data, loading, error, ReFetchData };
};
export default UseFetch;