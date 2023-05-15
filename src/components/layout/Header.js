

import styles from './Header.module.css'
import Tudo from '../Tudo';
import React, { Component } from 'react';
import { Nav, Tab } from 'bootstrap-4-react';
import Home from '../Home';
import GlobalItens from '../GlobalItens';


export default class App extends Component {
  render() {
    return (
      <div className={styles.divprincipal}>
      <React.Fragment  >
        <Nav tabs  role="tablist">
          <Nav.ItemLink  active href="#home" id="home-tab" data-toggle="tab" aria-selected="true" >
          <input  maxLength={7} type='text' placeholder='✎...' defaultValue=' Fazer' className={styles.input}/>
          </Nav.ItemLink  >
          <Nav.ItemLink href="#profile" id="profile-tab" data-toggle="tab" aria-selected="false">
          <input type='text'maxLength={7} defaultValue='Fazendo' placeholder='✎...' className={styles.input}/>
          </Nav.ItemLink >
          <Nav.ItemLink href="#contact"  id="contact-tab" data-toggle="tab" aria-selected="false">
          <input type='text'maxLength={7} defaultValue=' Feito'  placeholder='✎...' className={styles.input}/>
          </Nav.ItemLink>
          <Nav.ItemLink href="#contact" id="contact-tab" data-toggle="tab" aria-selected="false">
          <input type='text'maxLength={7}    placeholder='✎...'   className={styles.inputaba}/>
          </Nav.ItemLink>
        
        </Nav>
        <Tab.Content >
          <Tab.Pane  id="home" aria-labelledby="home-tab" show active>
            <div className={styles.one} >
            <Tudo/>

          </div>
          </Tab.Pane>
          <Tab.Pane id="profile" aria-labelledby="profile-tab">
          <div className={styles.one} >
            <Tudo/>

          </div>
          </Tab.Pane>
          <Tab.Pane id="contact" aria-labelledby="contact-tab">
          <div className={styles.one} >
            <Tudo/>

          </div>
          </Tab.Pane>
          
        </Tab.Content>
      </React.Fragment>
      </div>
    )
  }
}