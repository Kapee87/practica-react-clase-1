import axios from "axios";
import { useState, useEffect } from "react";

const Lista = () =>{
  
const [data, setData]=useState([]);
const [error, setError]=useState({
    isError:false,
    message: '',
  });

const[isLoading, setIsloading] = useState(false);

const [botonActualizador, setBotonActualizador] = useState(false);

    useEffect(() =>{
        axios("https://jsonplaceholder.typicode.com/users")
          .then(res => setData(res.data))
          .catch(err => setError({
            isError: true,
            message: err.message,
        }))
          .finally(()=>{
            setTimeout(()=>{
            setIsloading(false)
          }, 1000)
        })
    }, [botonActualizador])

    return (

     <>

      <button onClick={()=> setBotonActualizador(!botonActualizador)}>botonActualizador<button/>
       <ul>
       {
         error.isError ? <h4 style={{color:red}}>Error: {error.message</h4>
        isLoading ? <h4> cargando... </h4> : 
         data.length !== 0 &&
         data.map(item =>
          <li>{item.name}---{item.mail} </li>
         ))
     </ul>
     </>
    );
} 

export default Lista;