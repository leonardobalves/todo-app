function Entry({ text, onUpdate, onDelete }) {
    return <>
    <div className="container">
        <div className="row">
            <div className="col">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{text}</li>
                </ul>
            </div>
            <div className="col">
                <button className="btn btn-primary" onClick={onUpdate}>Edit</button>
                <button className="btn btn-danger" onClick={onDelete}>Delete</button>
            </div>
        </div>
    </div>
    </>
}

export default Entry;