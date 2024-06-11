import "./GroupList.css";

function GroupList({ groupList, onUpdateGroupHandler, onSelectItem }) {
  const deleteItem = (i) => {
    groupList.splice(i, 1);
    onUpdateGroupHandler(groupList, i);
  };
  const editItem = (index) => {
    onSelectItem(index, true);
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <h2>Group List</h2>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>discreption</td>
              <td>controls</td>
            </tr>
          </thead>
          <tbody>
            {groupList.map((list, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{list.name}</td>
                  <td>{list.discreption}</td>
                  <td>
                    <button className="update-button" onClick={() => editItem(index)}>
                      edit
                    </button>
                    <button
                      className="del-button"
                      onClick={() => {
                        deleteItem(index);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GroupList;
