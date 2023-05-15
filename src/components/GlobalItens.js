import Home from './Home'

import React from 'react'

export default function GlobalItens({itens,apagar}) {
  return (
    <div>
 
      {itens &&(
   
    <Home apagar={apagar} itens={itens} titulo={itens.name} />
    
      )
}
</div>
  )
}
