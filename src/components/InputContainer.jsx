import { useState } from "react";
import InputEl from "./InputEl";
import SelectEl from "./SelectEl";

const patterns = {
  name: {
    exp: /^[가-힣]{2}.*$/,
    msg: "이름은 한글로 두 글자 이상 입력해주세요.",
  },
  phone: {
    exp: /^010-[0-9]{4}-[0-9]{4}$/,
    msg: "전화번호는 010-0000-0000 형식으로 입력해주세요.",
  },
  group: {
    required: true,
  },
};

const InputContainer = ({ contactList, setContactList, groupList }) => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    group: groupList[0],
    record: "",
  });

  const validateInputs = () => {
    for (const key in contact) {
      if (patterns[key]) {
        const pattern = patterns[key];
        if (pattern.exp && !pattern.exp.test(contact[key])) {
          return false;
        }
        if (pattern.required && contact[key] === "") {
          return false;
        }
      }
    }
    return true;
  };

  const validateList = () => {
    for (const contactObj of contactList) {
      if (contactObj.name === contact.name) {
        return "이미 연락처에 있는 이름입니다.";
      }
      if (contactObj.phone === contact.phone) {
        return "이미 저장되어 있는 번호입니다.";
      }
    }
    return null;
  };

  const handleSubmit = () => {
    if (!validateInputs()) {
      alert("입력값을 다시 확인해주세요.");
      return;
    }
    const validationMsg = validateList();
    if (validationMsg) {
      alert(validationMsg);
      return;
    }

    setContact({ name: "", phone: "", group: groupList[0], record: "" });
    setContactList((prev) => {
      const id = prev.length > 0 ? prev[prev.length - 1].id + 1 : 0;
      const newList = [...prev, { id, ...contact }];
      localStorage.setItem("contacts", JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <section className="input-con">
      <InputEl
        title="이름"
        id="name"
        contact={contact}
        setContact={setContact}
        pattern={patterns.name}
      />
      <InputEl
        title="전화번호"
        id="phone"
        contact={contact}
        setContact={setContact}
        pattern={patterns.phone}
      />
      <SelectEl
        groupList={groupList}
        contact={contact}
        setContact={setContact}
      />
      <InputEl
        title="간단한기록"
        id="record"
        contact={contact}
        setContact={setContact}
      />
      <button id="primary-btn" onClick={handleSubmit}>
        저장
      </button>
    </section>
  );
};

export default InputContainer;
