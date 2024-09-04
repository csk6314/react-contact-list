import { useState } from "react";
import Modal from "./Modal";

const GroupModal = ({
  isOpen,
  onClose,
  contactList,
  groupList,
  setGroupList,
}) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const addGroup = () => {
    if (value.trim() === "") {
      alert("그룹명을 입력해주세요.");
      return;
    }
    setGroupList((prev) => {
      const newList = [...prev, value];
      localStorage.setItem("groups", JSON.stringify(newList));
      return newList;
    });
    setValue("");
  };

  const deleteGroup = (target) => {
    if (groupList.length === 1) {
      alert("하나의 그룹은 존재해야 합니다.");
      return;
    }

    if (contactList.findIndex((contact) => contact.group === target) !== -1) {
      alert("연락처에 있는 그룹은 삭제할 수 없습니다.");
      return;
    }

    setGroupList((prev) => {
      const filteredList = prev.filter((group) => group !== target);
      localStorage.setItem("groups", JSON.stringify(filteredList));
      return filteredList;
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="그룹 관리">
      <div className="modal-group-content">
        <ul>
          {groupList.map((group) => (
            <li key={group}>
              <span>{group}</span>
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  deleteGroup(group);
                }}
              ></i>
            </li>
          ))}
        </ul>
        <div className="add-group">
          <input type="text" value={value} onChange={handleInputChange} />
          <button onClick={addGroup}>추가</button>
        </div>
      </div>
    </Modal>
  );
};

export default GroupModal;
