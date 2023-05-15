import React from 'react'
import AddIcon from '@mui/icons-material/Add';

import { useState } from 'react'


export default function Form({addtodo}) {

   

    const [text,settext]= useState()
    const [id,setid] = useState(0)

    const tranformobj = (text)=>{


        const obj = {text: text,id: id
        }
 setid(id+1)  


 addtodo(obj) 


 const resposta = document.querySelector("#inputtext")
resposta.value = ''
settext(null)
if(text == null){
text = ''
addtodo('')

}


  
    }


    return (
  
 <div className='containerdois'>

      <button id='button' onClick={()=>tranformobj(text)} type="button" > <AddIcon/></button>
      <input className='criartodo'  id='inputtext' label="tarefa" variant="outlined" settext={settext} placeholder='Notas...' onChange={(e)=>settext(e.target.value)} />



    </div>
  )
}
