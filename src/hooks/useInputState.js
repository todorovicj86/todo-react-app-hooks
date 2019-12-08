import {useState} from 'react'

function useInputState(initValue){
    const [val, setVal] = useState(initValue)

    const handleChange = (evt) => {
        setVal(evt.target.value)
    };
    const reset = () => {
        setVal("")
    }

    return [val, handleChange, reset]
}

export default useInputState;