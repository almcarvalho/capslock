import React from 'react';
import { useState } from 'react';

export default function Contador() {

    const [contador, setContador] = useState(1);

    function up() {
        setContador(contador + 1);
    }


    return (
        <div>
            <div>{contador}</div>
            <button onClick={up}>Adicionar 1</button>
        </div>

    );
}



