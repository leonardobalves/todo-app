import { useState } from "react";

function Todos() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false
        }

        setTodos([...todos].concat(newTodo));
        setTodo("");
    }

    function deleteTodo(id) {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id);

        setTodos(updatedTodos);
    }

    function toggleComplete(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    function editTodo(id) {
        const updatedTodos = [...todos].map((todo) => {
          if (todo.id === id) {
            todo.text = editingText;
          }
          return todo;
        });
        setTodos(updatedTodos);
        setTodoEditing(null);
        setEditingText("");
      }

    return <>
    <div className="container">
        <form onSubmit={handleSubmit} className="form-group m-2">
            <input type="text" className="form-control m-2" onChange={(e) => setTodo(e.target.value)} value={todo}></input>
            <button type="submit" className="btn btn-primary m-2">Add todo</button>
        </form>
        {todos.map((todo) => <div className="m-2" key={todo.id}>
            {todoEditing === todo.id ?
                (<input
                className="form-control m-2"
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
                />) : (<div className="m-2 h3">{todo.text}</div>)}

            
            <input 
                className="m-2"
                type="checkbox"
                onChange={() => toggleComplete(todo.id)}
                checked={todo.completed}
            /> <span className="h6">Completed</span>

                {todoEditing === todo.id ?
                    (<button className="btn btn-primary m-2" onClick={() => editTodo(todo.id)}
                    >Submit</button>) :
                    (<button className="btn btn-warning m-2" onClick={() => setTodoEditing(todo.id)}
                    >Edit Todo</button>)}
                    
            <button className="btn btn-danger m-2" onClick={() => deleteTodo(todo.id)}>Delete</button>
                
        </div>)}
    </div>
    </>
}

export default Todos;