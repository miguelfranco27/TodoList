import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import styles from './Itens.module.css'
import { FormGroup } from '@mui/material'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';







export default function Itens({tarefa,deletar}) {


  
  return (
   

<>
    { tarefa && (

    <div  className={styles.container} > 
   
   <Checkbox></Checkbox>
     <textarea name="" defaultValue={tarefa.text} id="" cols="3" rows="2"></textarea> 
     <button onClick={()=>deletar(tarefa.id)} type="button" > <DeleteSweepIcon/></button>
 
     </div>
    
  )

  }
</>
  )
}

