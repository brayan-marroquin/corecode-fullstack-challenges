/*
Write a react component that will display the current value of our counter.

The counter should start at 0.
There should be a button to add 1.
There should also be a button to subtract 1.
We want to be able to see the value of the counter - so it should be rendered! And for your buttons to work they will need an onClick prop.

In your render you should return:

The counter display element with an id of 'counter', containing the counter value.
An increment button with an id of 'increment'
A decrement button with an id of 'decrement'
*/
import React, {useState} from 'react';

function Counter() {
    const [valor, setValor] = useState(0);

    const increment = () => {
        setValor(valor + 1);
    };

    const decrement = () => {
        setValor(valor - 1);
    };

    return (
        <div>
            <p id="counter">{valor}</p>
            <button id="increment" onClick={ () => increment() }>Increment</button>
            <button id="decrement" onClick={ () => decrement() }>Decrement</button>
        </div>
    )
}

export default Counter;
