import './Header.css';
import moon from './materials/images/icon-moon.svg'
import { useState } from 'react';
import sun from './materials/images/icon-sun.svg'
import List from './List';



function Header ({mode, setMode}) {
 
  let icono = moon;
  function cambiarModo(mode){
    if (mode=='light'){
      return(setMode('dark'))
    }else{
      return(setMode('light'))
    }
  }
  if(mode=='light'){
    icono = moon;
  }else{
    icono = sun
  }


  return (
    <div className={`header ${mode}`}>

      
        <img onClick={()=>cambiarModo(mode)} src={icono} id='moon' alt="" />
        <span>T O D O</span>
        



    </div>
  )
}

export default Header;
