import React, {useLayoutEffect, useRef} from 'react';
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
import '../05-useLayoutEffect/layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const {  data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const {  quote } = !!data && data[0]

    const pTag = useRef()

    useLayoutEffect(() => {

        console.log(pTag.current.getBoundingClientRect())
        
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

          
            <blockquote className="blockquote text-right">
                <p 
                ref={ pTag }
                className="mb-0">{
                    quote
                }</p>
            </blockquote> 


            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente Quote
            </button>

        </div>
    )
}

