import { useState } from "react";
import AddGroup from "./AddGroup";
import styles from "./GroupContainter.module.css";
import GroupList from "./GroupList";
import ModalOverlay from "./ModalOverlay";

function GroupContainter() {
  const [groupList, setGroupList] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const addGroup = (newGroup) => {
    setGroupList((prev) => [...prev, newGroup]);
  };
  const updateGroup = (newGroup) => {
    setGroupList([...newGroup]);
  };
  const itemSelectedHandler = (index, show) => {
    setShowEditForm(show);
    setSelectedItem(groupList[index]);
    setSelectedIndex(index); 
  };
  const editGroup = (group) => {
    groupList[selectedIndex] = group;
    setGroupList([...groupList]);
  };
  return (
    <>
      <h1 className={styles.title}>Group test </h1>
      <AddGroup sendGroup={addGroup} />
      <hr />
      <GroupList
        groupList={groupList}
        onUpdateGroupHandler={updateGroup}
        onSelectItem={itemSelectedHandler}
      />
      {showEditForm && (
        <ModalOverlay
          group={selectedItem}
          editedGroup={editGroup}
          hideHandler={(show) => setShowEditForm(show)}
        />
      )}
    </>
  );
}

export default GroupContainter;
