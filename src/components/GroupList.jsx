import "./GroupList.css";

function GroupList({ groupList, onUpdateGroupHandler, onSelectItem }) {
  const deleteItem = (id) => {
    groupList = groupList.filter((item) => item.id !== id);
    onUpdateGroupHandler(groupList);
  };
  const editItem = (id) => {
    onSelectItem(id, true);
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
              <td>Created At</td>
              <td>controls</td>
            </tr>
          </thead>
          <tbody>
            {groupList.map((list, index) => {
              return (
                <tr key={list.id}>
                  <td>{index + 1}</td>
                  <td>{list.name}</td>
                  <td>{list.discreption}</td>
                  <td>{list.createdAt}</td>
                  <td>
                    <button
                      className="update-button"
                      onClick={() => editItem(list.id)}
                    >
                      edit
                    </button>
                    <button
                      className="del-button"
                      onClick={() => {
                        deleteItem(list.id);
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
