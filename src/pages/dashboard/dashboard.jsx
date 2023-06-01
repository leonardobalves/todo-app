import { useEffect, useState } from "react";
import Entry from "../../components/entry/entry";

export default function Dashboard() {

    const [components, setComponents] = useState([]);

    function addComponent() {
        setComponents([...components, <Entry text={"teste"} key={components.length} onDelete={deleteComponent}/>]);
        console.log("log da function add");
        console.log(components)
    }
    
    useEffect(() => {
        console.log("log do useEffect")
        console.log(components);
    });

    function deleteComponent() {
        components.map(() => {
            console.log("log do map")
            console.log(components);
        });
    }

    return <>
        <div className="container">
            {components}
            <button className="btn btn-primary" onClick={addComponent}>New</button>
        </div>
    </>
}