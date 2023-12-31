import React, {useEffect, useState} from 'react'
import api from "../../api/axiosConfig";
import { format } from 'date-fns';
import GoalsCrud from "../GoalsCrud/GoalsCrud";
import Modal from 'react-modal';
const GoalList = () =>{
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        load()
    }, []); // Empty array means this effect runs once on mount

    const load = async () => {
        await api.get("/goals")
            .then((response) =>{
            setGoals(response.data);
        });
    };
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        load()
    };

    async function editGoal(goal) {
        if (!goal.id) return alert("Goals Not Found");
        await api.put("/goals/" + goal.id, {
            goal
        });
        alert("Goal Updated");
    }

    async function deleteGoal(goal) {
        await api.delete("/goals/" + goal.id);
        alert("Goal Deleted Successfully");
        goals.remove(goal);
    }

    return (
        <div>

            <div>
                <h1 className="text-center">My Goals</h1>
                <button type="button" className="btn btn-primary" onClick={openModal}>Add New Goal</button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <GoalsCrud onClose={closeModal}/>
                </Modal>

            </div>
            <table className="table table-hover mt-3" align="center">
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
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => editGoal(goal)}
                                >
                                    Edit
                                </button>
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
