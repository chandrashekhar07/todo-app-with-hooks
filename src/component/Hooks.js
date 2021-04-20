import React, { useState, useEffect } from 'react'



function Hooks() {

    const initialState = [{
        id: 0,
        todo: null,
        //        name: undefined
    }]



    const [arrayTodo, setArrayTodo] = useState(initialState)
    const [inputData, setInputData] = useState("")


    useEffect(() => {

        if (arrayTodo.length - 1) {
            console.log(` the total element is  ${arrayTodo.length - 1}`);
            document.title = ("no of element is " + (arrayTodo.length - 1))
        }

    }, [arrayTodo])

    const submitFormdata = (e) => {
        var temparray = {
            id: arrayTodo[arrayTodo.length - 1].id + 1,
            todo: inputData,

        }
        console.log(temparray.id)

        if (inputData) {
            setArrayTodo(prevarray => [...prevarray, temparray])
        }
        e.preventDefault();
        setInputData("")
    }

    const deleteTask = (id) => {
        let temparray = arrayTodo.filter((element) => {
            return (id !== element.id);

        })

        setArrayTodo(temparray);

    }

    return (

        <div>

            <form onSubmit={submitFormdata}>
                <label> input text : </label>
                <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} ></input>
                <button type="submit"> submit</button>
            </form>


            {
                arrayTodo.map((element, array) => {
                    return (
                        element.id ?
                            <span>
                                <h1> {element.id}. {element.todo}    </h1>
                                <button type="button" onClick={() => deleteTask(element.id)}>  delete {element.id} </button>
                            </span>
                            : "")
                })
            }


        </div>
    )
}

export default Hooks
