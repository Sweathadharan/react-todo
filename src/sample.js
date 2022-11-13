import React,{useEffect,useState} from 'react'
const Sample = ({value}) => {
    const[name,setName] =useState('')
    const[number,setNumber] =useState(0)
    useEffect(() =>{
        if(name.length){
        console.log('Rendered -UseEffect')
        }
    },[name,number])
    
    //useEffect(() =>{
       // if(number.length){
       // console.log('Number Rendered -UseEffect')
        //}
    //},[number])
    
    return ( 
        <>
        {/* <h1>{value}</h1> props */}
    
    <input placeholder='name' onChange={(e)=>setName(e.target.value)} />
    <input placeholder='number' onChange={(e) => setNumber(e.target.value)} />
    </>
     );
}
 
export default Sample;

/*class sample extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <h1>{this.props.welcome} {this.props.value}</h1> );
    }
}
 
export default sample;*/