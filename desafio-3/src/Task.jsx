import './Task.css'
import check from './materials/images/icon-check.svg'
import cross from './materials/images/icon-cross.svg'
import fav from './materials/images/favicon-32x32.png'



import React from 'react'

export default function Task({task, eliminar, completar, estado}) {
  return (
    <div className='task'>
        <button onClick={completar} className={`tick ${estado? 'complete' : ''}`}>{estado? <img src={check} alt="" /> : ''}</button>
        <div className={`${estado} `}>{task.texto}</div>
        <button onClick={eliminar} className='cross'><img src={cross} alt="" /></button>
    </div>
  )
}
