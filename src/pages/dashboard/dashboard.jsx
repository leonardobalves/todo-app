import { useState } from "react";
import Entry from "../../components/entry/entry";
import NavBar from "../../components/navbar/navbar";

function Dashboard() {

    const [entries, setEntries] = useState([]);
    const [entryText, setEntryText] = useState('');

    function createEntry() {
        const entry = {
            id: entries.length,
            component: <Entry key={entries.length} text={entryText} onUpdate={updateEntry} onDelete={deleteEntry} />
        }
        setEntries([...entries, entry]);
        setEntryText('');
    }

    function deleteEntry() {
        setEntries(entries.filter(a => a.id !== entries.id))
    }

    function updateEntry() {
        //update the entry..
    }

    const handleInputChange = (event) => {
        setEntryText(event.target.value);
    }

    return <>
        <NavBar />

        <div className="container">
            {entries.map((entry) => entry.component)}
            <input value={entryText} onChange={handleInputChange}></input>
            <button className="btn btn-primary" onClick={createEntry}>New</button>
        </div>
    </>
}

export default Dashboard;