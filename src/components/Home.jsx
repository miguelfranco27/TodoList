
import React, { useState } from 'react'
import Form from './Form'
import Itens from './Itens'
import styles from './Home.module.css'

import ClearIcon from '@mui/icons-material/Clear';


  export default function Home({titulo,apagar,itens}) {

const [todos,settodo] = useState([])

const addtodo = (todo)=>{
  settodo([...todos,todo])
console.log(todo)


}


const deletar = (id) =>{
 const filtrar = todos.filter((todo)=>todo.id !== id)
settodo(filtrar)

}



  return (
 
<>
    
       <div  className={styles.container}> 
    
   <div className={styles.titulo} >
    <input type='text' defaultValue={itens.name} placeholder='✎' ></input> 
     <button onClick={()=>apagar(itens.id)} type="button" > <ClearIcon/> </button>
     </div>
     
        <Form addtodo={addtodo} />

        {  todos.map((todo)=>(
       

      <Itens key={todo.id} deletar={deletar} addtodo={addtodo} tarefa={todo} />  

        ))}
         
           
    

    </div> 
         
    </>
)
}


