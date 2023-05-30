import { useState } from "react";
import Entry from "../../components/entry/entry";
import NavBar from "../../components/navbar/navbar";

function Dashboard() {

    const [entries, setEntries] = useState([]);

    const createEntry = () => {
        const entry = {
        id: entries.length,
        component: <Entry key={entries.length} onDelete={() => deleteEntry(entry.id)} />
        };
        setEntries([...entries, entry]);
    };

    const deleteEntry = (id) => {
        const updatedEntries = entries.filter((entry) => entry.id !== id);
        setEntries(updatedEntries);
    };

    return <>
    <NavBar />

    <div className="container">
        {entries.map((entry) => entry.component)}
        <button className="btn btn-primary" onClick={createEntry}>New</button>
    </div>
    </>
}

export default Dashboard;