import { useRef, useState } from "react";
import styles from "./AddGroup.module.css";

function AddGroup({ sendGroup }) {
  const nameRef = useRef();
  const discRef = useRef();
  const [error, setError] = useState("");

  const addNewGroup = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value.trim() !== "" &&
      discRef.current.value.trim() !== ""
    ) {
      const newGroup = {
        name: nameRef.current.value,
        discreption: discRef.current.value,
      };
      setError("");
      sendGroup(newGroup);
    } else setError(" -- complete all inputs");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>AddGroup</h2>
      <form className={styles.addForm}>
        <div className={styles.input_controller}>
          <label htmlFor="groupName">Group Name</label>
          <input ref={nameRef} type="text" id="groupName" required />
        </div>
        <div className={styles.input_controller}>
          <label htmlFor="groupDisc"> Discription</label>
          <textarea
            ref={discRef}
            required
            name=""
            id="groupDisc"
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <input
          className={styles.submit}
          type="submit"
          onClick={() => addNewGroup(event)}
          value="Add Group"
        />
      </form>
      <p style={{ color: "red", fontSize: "20px" }}>{error}</p>
    </div>
  );
}

export default AddGroup;
