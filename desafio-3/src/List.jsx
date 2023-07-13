import "./List.css";
import { useEffect, useState } from "react";
import Task from "./Task";

function List({modo}) {
  const [tasks, setTasks] = useState([
    {
      texto: "darle de comer al perro",
      id: 1,
      completed: false,
    },
    {
      texto: "lavarse los dientes",
      id: 2,
      completed: true,
    },
  ]);
  const [input, setInput] = useState("");

  function agregarTask(input) {
    const nuevaTarea = {
      texto: `${input}`,
      id: Math.random(),
      completed: false,
    };
    

    setTasks([nuevaTarea, ...tasks]);
    if(filtroActual=='completed')allFilter();
    
  }

  function eliminarTarea(i) {
    const newState = [...tasks];
    newState.splice(i, 1);

    setTasks(newState);
  }

  let escrito = "";

  function agregarInput(ev) {
    if (ev.keyCode === 13 && ev.target.value != "") {
      agregarTask(escrito);
      ev.target.value = "";
    }
  }

  const pending = () => {
    let pendingCont = 0;
    tasks.map((t) => {
      t.completed ? null : pendingCont++;
    });
    return pendingCont;
  };

  let restantes = pending();

  function clear() {
    const nuevaLista = tasks.filter((t) => !t.completed);
    setTasks(nuevaLista);
  }

  function completarTarea(index) {
    const nuevaLista = [...tasks];

    if (!tasks[index].completed) {
      nuevaLista[index].completed = true;
    } else {
      nuevaLista[index].completed = false;
    }
    setTasks(nuevaLista);
    
  }

  const [filter, setFilter] = useState([...tasks]);
  const [filtroActual, setFiltroActual] = useState('all');
  
  function activeFilter (){
    setFiltroActual('active')
  }
  function completedFilter (){
    
    setFiltroActual('completed')
  }
  
  function allFilter(){

    setFiltroActual('all')
  }
  useEffect(() => {
    let nuevaLista = [...tasks]
    if(filtroActual=='active'){
    nuevaLista = tasks.filter((task)=>!task.completed)
    }else if(filtroActual=='completed'){
    nuevaLista = tasks.filter((task)=>task.completed)
  }
  setFilter(nuevaLista)
  }, [filtroActual, tasks])
  


  return (
    <>
      <div className='table-container'>
        
        <input
          placeholder="Create a new todo..."
          onKeyDown={(ev) => agregarInput(ev)}
          onChange={(ev) => {
            escrito = ev.target.value;
          }}
          type="text"
        />
        <div id='ul-container' className={modo=='dark' ? 'dark-theme' : ''}>
        <ul className={modo=='dark' ? 'dark-theme' : ''}>
          {filter.map((task, index) => (
            <li className={modo=='dark' ? 'dark-theme dark-li' : ''} key={task.id}>
              <Task
                mode={modo}
                estado={task.completed? 'completed': ''}
                completar={() => completarTarea(index)}
                eliminar={() => eliminarTarea(index)}
                task={task}
              />
            </li>
          ))}
        </ul>
        </div>
        <div className={modo=='dark' ? 'info dark-theme' : 'info'}>
          <div>{`${restantes} items left`}</div>
          <div onClick={clear}>Clear completed</div>
          <div id='filter'>
            <button className={filtroActual === 'all' ? 'boton-filter active': 'boton-filter '}onClick={allFilter}>All</button>
            <button className={filtroActual === 'active' ? 'boton-filter active': 'boton-filter'}onClick={activeFilter}>Active</button>
            <button className={filtroActual === 'completed' ? 'boton-filter active': 'boton-filter'}onClick={completedFilter}>Completed</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
