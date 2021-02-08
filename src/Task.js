import Delete from "./assets/images/delete.png";

const Task = ({ elem, clickDelete, check, clickCheck }) => {
    return (
        <div className="listes">
            <input
                type="checkbox"
                checked={check ? "checked" : ""}
                onChange={clickCheck}
            />
            <span style={{ textDecoration: check ? "line-through" : "none" }}>
                {elem.tache}
            </span>
            <img src={Delete} alt="delete" onClick={clickDelete} />
        </div>
    );
};

export default Task;
