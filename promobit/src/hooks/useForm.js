import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInputChange = (e) => {
        setForm(e.target.value)
    }

    const clear = () => {
        setForm(initialState)
    }
    return [form, handleInputChange, clear]
}

export default useForm 