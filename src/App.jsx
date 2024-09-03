import { useEffect, useState } from "react";

//Components
import InputContainer from "./components/InputContainer";
import ListArea from "./components/ListArea";

// Modal
import useInfoModal from "./hooks/useInfoModal";
import useGroupModal from "./hooks/useGroupModal";
import GroupModal from "./components/modal/GroupModal";
import InfoModal from "./components/modal/InfoModal";

//initData
export const initalGroupData = ["가족", "친구", "직장", "스터디"];

function App() {
  const isInfoModalOpen = useInfoModal((state) => state.isOpen);
  const isGroupModalOpen = useGroupModal((state) => state.isOpen);
  const { toggleModal: toggleInfoModal } = useInfoModal(
    (state) => state.actions
  );
  const { toggleModal: toggleGroupModal } = useGroupModal(
    (state) => state.actions
  );

  const [contactList, setContactList] = useState([]);
  const [groupList, setGroupList] = useState([]);

  const initGroupList = () => {
    const groups = JSON.parse(localStorage.getItem("groups"));
    if (!groups || groups.length < 1) {
      localStorage.setItem("groups", JSON.stringify(initalGroupData));
      setGroupList(initalGroupData);
      return;
    }
    setGroupList(groups);
  };

  const initContactList = () => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (!contacts || contacts.length < 1) return;
    setContactList(contacts);
  };
  useEffect(() => {
    initGroupList();
    initContactList();
  }, []);

  return (
    <>
      <div className="wrap">
        <header>
          <h1>연락처 리스트</h1>
        </header>
        <main>
          <InputContainer
            contactList={contactList}
            setContactList={setContactList}
            groupList={groupList}
          />
          <ListArea contactList={contactList} setContactList={setContactList} />
        </main>
      </div>
      <GroupModal
        onClose={toggleGroupModal}
        isOpen={isGroupModalOpen}
        groupList={groupList}
        setGroupList={setGroupList}
      />
      <InfoModal
        onClose={toggleInfoModal}
        isOpen={isInfoModalOpen}
        contactList={contactList}
      />
    </>
  );
}

export default App;
