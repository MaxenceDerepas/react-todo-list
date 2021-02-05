import Task from "./Task";
import { useState } from "react";

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [inputChange, setInputChange] = useState("");
    const [check, setCheck] = useState([]);

    // fonction qui change l'etat de l'input text
    const changeInput = (event) => {
        setInputChange(event.target.value);
    };
    // fonction qui ajoute une tache a la liste
    const submit = (event) => {
        if (inputChange !== "") {
            event.preventDefault();
            const newTasks = [...tasks];
            newTasks.push(inputChange);
            setTasks(newTasks);
            setInputChange("");

            const newCheck = [...check];
            newCheck.push(false);
            setCheck(newCheck);
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

                        const newCheck = [...check];
                        newCheck.splice(index, 1);
                        setCheck(newCheck);
                    };

                    // fonction qui change l'etat des checkbox
                    const clickCheck = () => {
                        if (check[index] === false) {
                            const newCheck = [...check];
                            newCheck.splice(index, 1, true);
                            setCheck(newCheck);
                        } else {
                            const newCheck = [...check];
                            newCheck.splice(index, 1, false);
                            setCheck(newCheck);
                        }
                    };

                    return (
                        <Task
                            elem={elem}
                            key={index}
                            check={check[index]}
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
