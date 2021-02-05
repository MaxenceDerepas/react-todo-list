import Delete from "./assets/images/delete.png";
import { useState } from "react";

const Task = ({ elem, clickDelete }) => {
    const [check, setCheck] = useState(false);
    const clickCheck = () => {
        if (check === true) {
            setCheck(false);
        } else {
            setCheck(true);
        }
    };
    return (
        <div className="listes">
            <input type="checkbox" onChange={clickCheck} />
            <span style={{ textDecoration: check ? "line-through" : "none" }}>
                {elem.tache}
            </span>
            <img src={Delete} alt="delete" onClick={clickDelete} />
        </div>
    );
};

export default Task;
