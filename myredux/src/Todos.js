import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(rec => {
            return (
                <div className="collection-item" key={rec.id}>
                    <span onClick={() => {deleteTodo(rec.id)}}>{ rec.content }</span>
                </div> 
            )
        }) 
    ) : (
        <p className="center">You have no todos</p>
    ) 
    return (
       <div className="todos collection">
           { todoList }
       </div> 
    )
}

export default Todos