import { useRef, useState } from "react";
import styles from "./ModalOverlay.module.css";

const ModalOverlay = ({ group, hideHandler, editedGroup }) => {
  const nameRef = useRef();
  const discRef = useRef();
  //

  const [name, setName] = useState(group.name || "");
  const [disc, setDisc] = useState(group.discreption || "");

  const editGroup = (e) => {
    e.preventDefault();
    const updatedGroup = {
      name: nameRef.current.value,
      discreption: discRef.current.value,
    };
    editedGroup(updatedGroup);
    hideHandler(false);
    console.log(updatedGroup);
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
              ref={nameRef}
              defaultValue={name}
              onChange={() => setName(name)}
              type="text"
              id="groupName"
              required
            />
          </div>
          <div className={styles.input_controller}>
            <label htmlFor="groupDisc"> Discription</label>
            <textarea
              ref={discRef}
              defaultValue={disc}
              onChange={() => setDisc(disc)}
              id="groupDisc"
              cols="30"
              rows="1"
            ></textarea>
          </div>
          <div>
            <button className={styles.submit} type="button" onClick={() => editGroup(event)}>
              Update Group
            </button>
            <button className={styles.cancel} type="button" onClick={hideOverlay}>
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ModalOverlay;
