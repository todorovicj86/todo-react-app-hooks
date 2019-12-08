import {useState, useEffect} from 'react'

function useLocalStorageState(key, defualtValue){
    const initialState = () => {
        let val;
        try {
          val = JSON.parse(window.localStorage.getItem(key) || String(defualtValue))
        }
        catch(err){
            val = defualtValue;
        }
        return val;
    }

    const[state, setState] = useState(initialState)
    
    useEffect(()=> {
        window.localStorage.setItem(key, JSON.stringify(state))
    },[state])

    return [state, setState]
}

export default useLocalStorageState;

