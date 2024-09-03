import { useState } from "react";

const InputEl = ({ title, id, contact, setContact, pattern }) => {
  const [error, setError] = useState(false);
  const handleTextChange = (e) => {
    setContact((prev) => {
      return { ...prev, [id]: e.target.value };
    });
    setError(!pattern.exp.test(e.target.value));
  };

  return (
    <div>
      <div className="input-el">
        <label>{title}</label>
        <div className="input-box">
          <input
            placeholder={title}
            value={contact[id]}
            onChange={handleTextChange}
          />
        </div>
      </div>
      {error && <span id="error-msg">{pattern.msg}</span>}
    </div>
  );
};

export default InputEl;
