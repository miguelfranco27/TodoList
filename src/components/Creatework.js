import React from 'react'
import styles from './Creatework.module.css'
import { Button } from 'bootstrap-4-react';
import Tudo from './Tudo';

export default function Creatework() {
  var agora = new Date()
  var hora = agora.getHours()
  var minuto = agora.getMinutes()

  return (
    <div className={styles.div}>
      <nav className={styles.nav}>
<h4>{hora}:{minuto}</h4>

    <h3>Bem vindo</h3>
    <p>- Crie notas</p>
    <p>- organize-se</p>
    <p>- Lembretes</p>

      </nav>
      
      <nav className={styles.navtwo}>
<textarea rows="11" placeholder='✎ Destaque ...'></textarea>
  </nav>

    </div>
  )
}
