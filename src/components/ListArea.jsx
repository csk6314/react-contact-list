import React from "react";
import SearchCon from "./SearchCon";
import List from "./List";

const ListArea = ({ contactList, setContactList }) => {
  return (
    <section className="list-area">
      <SearchCon setContactList={setContactList} />
      <ul className="contact-list">
        {contactList.map((contact) => (
          <List
            key={contact.id}
            contact={contact}
            setContactList={setContactList}
          />
        ))}
      </ul>
    </section>
  );
};

export default ListArea;
