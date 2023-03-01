import { useState } from "react"

export const useCounter = (value) => {

    const [counter, setCounter] = useState(value)

    const incrementCount = () => {
        setCounter(counter + 1)
    }

    const decrementCount = () => {

        setCounter(counter - 1)
    }

    return {
        counter,
        incrementCount,
        decrementCount,
    }
}
