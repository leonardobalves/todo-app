import {  useState } from "react";

export default function Dashboard() {

    const [list, setList] = useState([]);

    const handleListClick = () => {
        const id = list.length + 1;
        setList((previous) => [...previous, {
            id: id,
            text: "Input",
            completed: false
        }]);
    }    

    return <>
        <div className="container">
            <ul>
                {list.map((todo) => {
                    return <li
                            completed = {todo.completed}
                            id={todo.id}
                            onClick={() => console.log(todo.id)}>
                                {todo.text}
                            </li>
                })}
            </ul>
            <button className="btn btn-primary" onClick={() => handleListClick()}>New</button>
        </div>
    </>
}