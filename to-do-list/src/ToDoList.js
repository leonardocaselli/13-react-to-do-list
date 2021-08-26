import React, { useState, useEffect } from 'react'

const ToDoList = () => {
    const [newToDo, setNewToDo] = useState("")
    const [toDo, setToDo] = useState([])
    const [completTask, setComplitTask] = useState([])
    const [cheked, setChecked] = useState("true")

    useEffect(() => { console.log("UseEfect toDo: " + toDo + " Complet :" + completTask) }, [completTask]) // se marca como tarea completada 


    const onChangeHandler = ({ target: { name, value } }) => {
        console.log("name :" + name + "  value :" + value)
        //const newObj = { [name]: value }
        //console.log("l10 mewObj : " + newObj)
        //setNewToDo({ ...newToDo, newObj })
        setNewToDo(value)

    }

    const createToDo = e => {
        e.preventDefault()
        console.log("l18 newToDo : " + newToDo)
        console.log("****** event****" + e)
        setToDo([...toDo, newToDo])

    }
    const removeTask = (key) => {
        toDo.splice(key, 1)  //splice borra uno o varios registro de un arreglo la cantidad es el segundo termino en este caso 1
        const newToDoArray = [...toDo]
        setToDo(newToDoArray)
    }

    return (
        <div>
            <h3>Hola desde ToDoList</h3>
            <form onSubmit={createToDo}>
                <input type="submit" value="Add To Do" />
                <input type="text" name="todo" onChange={onChangeHandler} />


            </form>
            <div>
                <ul>

                    {toDo.map((task, key) => {
                        if (completTask.includes(task)) {   //macada el checkbos 
                            return (
                                <div>
                                    <li key={key}>
                                        <input name="taskEstatus" type="checkbox" id="false"
                                            onChange={() => setComplitTask([...completTask, task])} />
                                        <s>{task}</s>
                                        <button onClick={() => removeTask(key)}>Delete Task</button>
                                    </li>
                                </div>
                            )
                        }

                        return (
                            <li key={key}><input name="taskEstatus" type="checkbox" id="true"
                                onChange={() => setComplitTask([...completTask, task])} />
                                {task}
                                <button onClick={() => removeTask(key)}>Delete Task</button>
                            </li>
                        )
                        //https://www.w3schools.com/jsref/prop_checkbox_checked.asp
                        //https://es.reactjs.org/docs/forms.html
                        //https://www.robinwieruch.de/react-checkbox
                        // return (
                        //     <li key={key}><checkbox label="taskEstatus" value={cheked}
                        //         onChange={() => setComplitTask([...completTask, task])} />
                        //         {task}
                        //         <button onClick={() => removeTask(key)}>Delete Task</button></li>
                        // )


                    })}
                </ul>


            </div>


        </div >
    )
}
export default ToDoList