import Modal from "./Modal";
import useInfoModal from "../../hooks/useInfoModal";

const keysInKorean = {
  name: "이름",
  phone: "전화번호",
  group: "그룹",
  record: "메모",
};

const InfoModal = ({ isOpen, onClose, contactList }) => {
  const id = useInfoModal((state) => state.id);
  const contact = contactList.find((contact) => contact.id === id);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="연락처 상세 정보">
      <div className="modal-info-content">
        {contact &&
          Object.keys(contact)
            .slice(1)
            .map((attr) => (
              <div key={attr}>
                <em>{`${keysInKorean[attr]}:`}</em>
                <span>{contact[attr]}</span>
              </div>
            ))}
      </div>
    </Modal>
  );
};

export default InfoModal;
