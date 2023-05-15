import { TextField } from "@mui/material";
import React from "react";

import { Button } from 'bootstrap-4-react';

import { useState } from "react";

export default function Createitens({ additem }) {

  const [nome,setnome] = useState()
  const [iditens, setiditens] = useState(0);

  const tranformobjitem = (nome) => {

    const objitens = { name:nome, id: iditens };
    setiditens(iditens + 1);
    additem(objitens);

    
 const response = document.querySelector("#namecard")
 response.value = ''
 setnome(null)

 if(objitens.name == null){
 nome =''
  additem('')
 }

  }
  return (
    <div className="divcreate">


      <TextField id="namecard" label="Tarefa..." variant="standard" setnome={setnome}  onChange={(e)=>setnome(e.target.value)} />
    
      <Button onClick={() => tranformobjitem(nome)}  primary outline>Adicionar</Button>
   
    
    </div>
  )
}
