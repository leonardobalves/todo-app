import { useState } from "react";

function Todos() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

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

    return <>
    <div className="container">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}></input>
            <button type="submit">Add todo</button>
        </form>
        {todos.map((todo) => <div key={todo.id}>
            <div>{todo.text}</div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>)}
    </div>
    </>
}

export default Todos;