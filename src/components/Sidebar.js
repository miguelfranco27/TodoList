import React from 'react'
import styles from './Sidebar.module.css'
import GradeIcon from '@mui/icons-material/Grade';
import HomeIcon from '@mui/icons-material/Home';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DoneIcon from '@mui/icons-material/Done';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
export default function Sidebar() {
  return (
    <div className={styles.divtudo}>
       <nav className={styles.nav}>
     <button><DesignServicesIcon/></button>
     <button><CalendarMonthIcon/></button>
     <button><GradeIcon/></button>
     <button><HomeIcon/></button>
     <button><DoneIcon/></button>
     </nav>
     <div className={styles.divisao}>
     <button><PersonIcon/></button>
     <button><MenuIcon/></button>
     </div>

 


    </div>
  )
}
