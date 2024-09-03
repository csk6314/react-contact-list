const SearchCon = ({ setContactList }) => {
  const resetContacts = () => {
    setContactList(JSON.parse(localStorage.getItem("contacts")));
  };

  const searchContacts = (searchWord) => {
    setContactList((prev) => {
      const filteredList = prev.filter(
        (contact) =>
          contact.name.includes(searchWord) ||
          contact.phone.includes(searchWord) ||
          contact.group.includes(searchWord)
      );
      return filteredList;
    });
  };

  const handleKeyUpEvent = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value.trim() === "") {
        alert("검색어를 입력해주세요.");
        return;
      }
      searchContacts(e.target.value);
    }
  };

  return (
    <div className="search-con">
      <input id="search-input" onKeyUp={handleKeyUpEvent} />
      <button id="primary-btn" onClick={resetContacts}>
        전체리스트 보기
      </button>
    </div>
  );
};

export default SearchCon;
