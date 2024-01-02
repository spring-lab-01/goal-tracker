import React, {useState} from 'react'
import api from '../api/axiosConfig';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const GoalsCrud = ({}) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
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
        navigate('/');
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
                    <label>Goal</label>
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
                    <i className="small material-icons" onClick={save}>save</i>
                    <Link to={"/"}>
                        <i className="small material-icons">cancel</i>
                    </Link>
                </div>
            </form>
        </div>

    );

}


export default GoalsCrud
