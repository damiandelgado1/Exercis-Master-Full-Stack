import { useState } from 'react'

const State = () => {

    const [count, useCount] = useState();

    return [
        <div>
            <h1> El valor de count es (count) </h1>
        </div>
    ]
}