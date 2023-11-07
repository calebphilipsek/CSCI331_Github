import {useState, useEffect} from "react"

export default function CountButton(props) {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1 * props.mult);
    }

    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }
    useEffect(rollOverCount, [count])

    let buttonStyle= {
        backgroundColor: props.style
    }

    return (
        <>
            <button onClick={handleClick} style={buttonStyle}>{props.name}</button>
            <div>{count}</div>
        </>
    )
}