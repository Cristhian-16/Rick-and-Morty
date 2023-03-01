import { useEffect, useState } from "react";

export const useCustomFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    })


    const getUrl = async () => {

        setState({
            ...state,
            loading: true,
        })

        const res = await fetch(url);
        const data = await res.json()
        setState({
            data: data,
            loading: false,
            error: null
        })

    }

    useEffect(() => {
        getUrl()
    }, [url])

    return {
        data: state.data,
        loading: state.loading,
        error: state.error
    }
}
