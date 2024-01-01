import React, {useEffect, useState} from 'react'
import api from "../api/axiosConfig";
import { format } from 'date-fns';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const GoalList = () =>{
    const [goals, setGoals] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        load()
    }, []); // Empty array means this effect runs once on mount

    const load = async () => {
        await api.get("/goals")
            .then((response) =>{
            setGoals(response.data);
        });
    };


    async function deleteGoal(id) {
        await api.delete("/goals/" + id);
        alert("Goal Deleted Successfully");
        load();
    }

    return (
        <div>

            <div>
                <Link to="addGoal" className="right">
                    <a className="btn-floating btn-large waves-effect waves-light red"><i
                        className="material-icons">add</i></a>
                </Link>
            </div>
            <table className="table" align="center">
                <thead className="thead-light">
                <tr>
                    <th scope="col" hidden={true}>Id</th>
                    <th scope="col">Goal</th>
                    <th scope="col">More About it</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                {goals.map((goal, index) => {
                    return (
                        <tbody key={goal.id}>
                        <tr>
                            <th scope="row" hidden={true}>{goal.id} </th>
                            <td>{goal.name}</td>
                            <td>{goal.description}</td>
                            <td>{format(goal.createdDatetime, 'dd-MMM-yyyy h:mm:ss a')}</td>
                            <td>
                                <Link
                                    to={{
                                        pathname: `editGoal/${goal.id}`,
                                        state: { goals: goal }
                                    }}
                                >
                                    <button className="btn">Edit</button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteGoal(goal.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    )
};

export default GoalList
