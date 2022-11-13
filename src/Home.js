import { Axios } from 'axios';
import React, { useEffect } from 'react'
const Home = () => {
    useEffect(()=> {
        Axios.GET('https://dog.ceo/api/breeds/image/random',{
            headers:{}
    }).then(res=>{
        console.log(res)
    })
            }
        }
        )
    })
    return ( 
        <>
        <a href={'/Test'}>Test1</a>
        <a href={'/filter'}>Test2</a>
        </>
     );
}
 
export default Home ;