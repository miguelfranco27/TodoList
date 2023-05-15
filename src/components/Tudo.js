import React from 'react'
import { useState } from 'react'

import Createitens from './Createitens'
import GlobalItens from './GlobalItens'





export default function Tudo() {

    const [item,setitem] = useState([])

     const additem = (itens)=>{
        setitem([...item,itens])
        console.log(itens)
        
    }

    const apagar = (id) =>{
      const filtrar = item.filter((itens)=>itens.id !== id)
     setitem(filtrar)
     
     }

  
  return (
<div className='divhome'>
     <Createitens additem={additem} />
<div className='containeritem'>
     {item.map((itens)=>(
       
       <GlobalItens key={itens.id}  apagar={apagar} additem={additem} itens={itens} /> 
      
       ))}

</div>


    </div>
  )
}
