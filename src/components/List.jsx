import useInfoModal from "../hooks/useInfoModal";

const List = ({ contact, setContactList }) => {
  const { name, phone, group, id } = contact;
  const { toggleModal, setId } = useInfoModal((state) => state.actions);

  const deleteContact = () => {
    setContactList((prev) => {
      const filteredList = prev.filter((contact) => contact.id !== id);
      localStorage.setItem("contacts", JSON.stringify(filteredList));
      return filteredList;
    });
  };

  return (
    <li className="contact-el">
      <div>
        <span>{name}</span>
        <span>{phone}</span>
        <span>{group}</span>
      </div>
      <div>
        <i
          className="fa-solid fa-circle-info"
          onClick={() => {
            setId(id);
            toggleModal();
          }}
        ></i>
        <i className="fa-solid fa-trash" onClick={deleteContact}></i>
      </div>
    </li>
  );
};

export default List;
