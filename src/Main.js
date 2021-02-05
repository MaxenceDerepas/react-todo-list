import Task from "./Task";
import { useState } from "react";

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [inputChange, setInputChange] = useState("");

    // fonction qui change l'etat de l'input text
    const changeInput = (event) => {
        setInputChange(event.target.value);
    };
    // fonction qui ajoute une tache a la liste
    const submit = (event) => {
        if (inputChange !== "") {
            event.preventDefault();
            const newTasks = [...tasks];
            newTasks.push({ tache: inputChange, checkbox: false });
            setTasks(newTasks);
            setInputChange("");
        }
        event.preventDefault();
    };

    return (
        <section>
            <div>
                {tasks.map((elem, index) => {
                    // fonction qui supprime une tache de la liste
                    const clickDelete = () => {
                        const newTasks = [...tasks];
                        newTasks.splice(index, 1);
                        setTasks(newTasks);
                    };

                    // fonction qui change l'etat des checkbox
                    const clickCheck = () => {
                        if (tasks[index].checkbox === false) {
                            const newCheck = [...tasks];
                            newCheck[index].checkbox = true;
                            setTasks(newCheck);
                        } else {
                            const newCheck = [...tasks];
                            newCheck[index].checkbox = false;
                            setTasks(newCheck);
                        }
                    };

                    return (
                        <Task
                            elem={elem}
                            key={index}
                            check={tasks[index].checkbox}
                            clickCheck={clickCheck}
                            clickDelete={clickDelete}
                        />
                    );
                })}
                {/* ------ partie input ------ */}
            </div>
            <form onSubmit={submit}>
                <input
                    className="input-form"
                    type="text"
                    placeholder="New Task"
                    onChange={changeInput}
                    value={inputChange}
                />
                <button className="button-form" type="submit">
                    Add Task
                </button>
            </form>
        </section>
    );
};

export default Main;
