import React, {useEffect, useState} from 'react'
import api from '../api/axiosConfig';
import {Link, useLocation, useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {Button} from "reactstrap";


const GoalEdit = _ => {
    const navigate = useNavigate();
    const [goal, setGoal] = useState({});
    const [name, setGoalName] = useState("");
    const [description, setGoalDescription] = useState("");
    var editGoal = name;
    const { id } =  useParams();

    useEffect(() => {
        load()
    }, []); // Empty array means this effect runs once on mount

    const load = async () => {
        await api.get("/goals/"+id)
            .then((response) =>{
                setGoal(response.data);
                setGoalName(response.data.name);
                setGoalDescription(response.data.description);
            });
    };

    async function save(event) {
        event.preventDefault();
        await api.put("/goals/" + id, {
            id: goal.id,
            name: name,
            description: description,
            createdBy: goal.createdBy,
            createdDatetime: goal.createdDatetime
        });
        alert("Goal Saved");
        // reset state
        setGoal({});
        navigate('/');
    }

    return (
        <div className="container">
            <h4>Edit Goal - #{id}</h4>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setGoalName(e.target.value)}
                    />
                </div>
                <div className="form-group mb-2">
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={e => setGoalDescription(e.target.value)}
                    />
                </div>

                <div className={"container-fluid"}>
                    <Button onClick={save}>Save</Button>
                    <Link to={"/"}>
                        <Button>Cancel</Button>
                    </Link>
                </div>
            </form>
        </div>

    );

};


export default GoalEdit
