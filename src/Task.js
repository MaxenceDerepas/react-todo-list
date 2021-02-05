import Delete from "./assets/images/delete.png";

const Task = ({ elem, check, clickDelete, clickCheck }) => {
    return (
        <div className="listes">
            <input className="Check" type="checkbox" onChange={clickCheck} />
            <span
                className="liste"
                style={{ textDecoration: check ? "line-through" : "none" }}
            >
                {elem}
            </span>
            <img src={Delete} alt="delete" onClick={clickDelete} />
        </div>
    );
};

export default Task;
