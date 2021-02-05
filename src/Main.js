import Task from "./Task";
import { useState } from "react";

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [inputChange, setInputChange] = useState("");
    const [check, setCheck] = useState(false);

    const changeInput = (event) => {
        setInputChange(event.target.value);
    };

    const clickCheck = () => {
        if (check === false) {
            setCheck(true);
        } else {
            setCheck(false);
        }
    };

    const submit = (event) => {
        if (inputChange !== "") {
            event.preventDefault();
            const newTasks = [...tasks];
            newTasks.push(inputChange);
            setTasks(newTasks);
            setInputChange("");
        }
        event.preventDefault();
    };

    return (
        <section>
            <div>
                {tasks.map((elem, index) => {
                    const clickDelete = () => {
                        const newTasks = [...tasks];
                        newTasks.splice(index, 1);
                        setTasks(newTasks);
                    };

                    return (
                        <Task
                            elem={elem}
                            key={index}
                            check={check}
                            setCheck={setCheck}
                            clickCheck={clickCheck}
                            clickDelete={clickDelete}
                        />
                    );
                })}
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
