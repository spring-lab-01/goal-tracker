import React, {useState} from 'react'
import api from '../../api/axiosConfig';


const GoalsCrud = ({ onClose }) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    async function save(event) {
        event.preventDefault();
        await api.post("/goals", {
            name: name,
            description: description
        });
        alert("Goal Saved");
        // reset state
        setId("");
        setName("");
        setDescription("");
        onClose()
    }

    return (
        <div className="container" >
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        hidden
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group mb-2">
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <div>
                    <button className="btn btn-primary" onClick={save}>
                        Add New Goal
                    </button>
                    <button className="btn btn-dange" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>

    );

}


export default GoalsCrud
