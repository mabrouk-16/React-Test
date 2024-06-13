import { useState } from "react";
import styles from "./ModalOverlay.module.css";

const ModalOverlay = ({ group, hideHandler, editedGroup }) => {
  const [name, setName] = useState(group.name || "");
  const [discreption, setDiscreption] = useState(group.discreption || "");

  const editGroup = (e) => {
    e.preventDefault();
    const updatedGroup = {
      ...group,
      name,
      discreption,
    };
    editedGroup(updatedGroup);
    hideHandler(false);
  };
  const hideOverlay = () => {
    hideHandler(false);
  };
  return (
    <>
      <div className={styles.overlay}>
        <form className={styles.editForm}>
          <div className={styles.input_controller}>
            <label htmlFor="groupName">Group Name</label>
            <input
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="groupName"
              required
            />
          </div>
          <div className={styles.input_controller}>
            <label htmlFor="groupDisc"> Discription</label>
            <textarea
              defaultValue={discreption}
              onChange={(e) => setDiscreption(e.target.value)}
              id="groupDisc"
              cols="30"
              rows="1"
            ></textarea>
          </div>
          <div>
            <button
              className={styles.submit}
              type="button"
              onClick={() => editGroup(event)}
            >
              Update Group
            </button>
            <button
              className={styles.cancel}
              type="button"
              onClick={hideOverlay}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ModalOverlay;
