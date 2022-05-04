import { useEffect, useState } from "react";

function useLocalStorage(key, initialState){

    const [state, setState] = useState(
        () => JSON.parson(window.localStorage.getItem(key)) || initialState
    )

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState];
};

export default useLocalStorage;