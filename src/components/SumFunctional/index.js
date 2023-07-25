import React, { useState } from "react";

function SumFunctional() {
    const [firstInput, setFirstInput] = useState(0);
    const [secondInput, setSecondInput] = useState(0);
    const [result, setResult] = useState(0);
    const [counter, setCounter] = useState(0);


    return (
        <>
            <button onClick={ }>+1</button>
            <p>El contador esta en: {counter}</p>
        </>
    );
}

export default SumFunctional;