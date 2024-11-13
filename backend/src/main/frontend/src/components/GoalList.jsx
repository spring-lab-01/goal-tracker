import React, {useEffect, useState} from 'react'
import api from "../api/axiosConfig";
import { format } from 'date-fns';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {Button, Table} from "reactstrap";
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
        <div className={"container-fluid"}>
            <h4>My Goals</h4>
            <div>
                <Link to="addGoal" className="right">
                    <Button className="btn-info">Add</Button>
                </Link>
            </div>
            <Table responsive>
                <thead>
                <tr>
                    <th hidden={true}>Id</th>
                    <th>Goal</th>
                    <th>Description</th>
                    <th>Created Datetime</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {goals && goals.map((goal, index) => {
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
                                        state: {goals: goal}
                                    }}>
                                    <Button className="btn-info">Edit</Button>
                                </Link>
                                <Button className="btn-danger" onClick={() => deleteGoal(goal.id)}>Delete</Button>
                            </td>
                        </tr>
                        </tbody>
                    );
                })}
            </Table>
        </div>
    )
};

export default GoalList
