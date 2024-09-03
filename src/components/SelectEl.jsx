import useGroupModal from "../hooks/useGroupModal";

const SelectEl = ({ groupList, contact, setContact }) => {
  const { toggleModal } = useGroupModal((state) => state.actions);

  const handleGroupChange = (e) => {
    setContact((prev) => {
      return { ...prev, group: e.target.value };
    });
  };

  return (
    <div className="input-el">
      <label>그룹</label>
      <div className="select-box">
        <select onChange={handleGroupChange} value={contact.group}>
          {groupList.map((group) => (
            <option key={group}>{group}</option>
          ))}
        </select>
        <button
          onClick={() => {
            toggleModal();
          }}
        >
          조직추가
        </button>
      </div>
    </div>
  );
};

export default SelectEl;
