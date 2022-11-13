import React from 'react'
import Sample from './sample'
export const Test =() => {
    return(
        <h2>swea</h2>
    );
}
export const Two = () => {
    const name="hello world"
    return ( 
        <div>
            <h2>React</h2>
            
            <Sample value={name} />
        </div> 
    );
}
export default Test;