import { useState } from "react";
import Entry from "../../components/entry/entry";
import NavBar from "../../components/navbar/navbar";

function Dashboard() {

    const [entries, setEntries] = useState([]);

    function createEntry() {
        let entry = <Entry key={entries.length} test={deleteEntry} />
        setEntries([...entries, entry]);
    }

    function deleteEntry() {

    }

    function updateEntry() {
        
    }

    return <>
        <NavBar />

        <div className="container">
            {entries}
            <button className="btn btn-primary" onClick={createEntry}>New</button>
        </div>
    </>
}

export default Dashboard;