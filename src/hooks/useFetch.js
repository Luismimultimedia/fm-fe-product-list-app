import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
    const [dataState, setDataState] = useState({
        data: [],
        loading: true,
        error: null
    });

    // functions
    const handleFetch = useCallback(async() => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(response.statusText);
            const dataApi = await response.json();
            setDataState( prev => ({
                ...prev,
                loading: false,
                data: dataApi
            }));
        } catch (error) {
            setDataState( prev => ({
                ...prev,
                loading: false,
                error: error.message
            }));
        }
      },[url]);

    // react hooks
    useEffect(() => {
        if (dataState?.data?.length === 0) handleFetch();
    }, [dataState?.data?.length, handleFetch])

    return {
        ...dataState,
    };
};

export default useFetch;