import React, { useEffect, useState } from 'react'

const Contador = () => {

    console.log('Render 1')

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Effect 1: Componente montado');
        return () => {
            console.log('Effect 1: Componente desmontado');
        }
    }, [])

    useEffect(() => {
        console.log('Effect 2: El estado Cambio')
    }, [count])

    const addHandler = () => {
        console.log('Se esta sumnado');
        setCount(count + 1)
    }

    const subHandler = () => {
        console.log('Se esta restando');
        setCount(count - 1)
    }

    return (<>
        <div>Contador</div>
        <button onClick={subHandler}> - </button>
        <strong> {count} </strong>
        <button onClick={addHandler}> + </button>
    </>
    )
}

export default Contador