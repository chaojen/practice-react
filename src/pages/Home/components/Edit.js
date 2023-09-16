import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [content, setContent] = useState("");
  function changeContent(e) {
    setContent(e.target.value);
  }

  const [date, setDate] = useState("");
  function changeDate(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function changeTime(e) {
    setTime(e.target.value);
  }

  function addNote() {
    submittingStatus.current = true;
    add(function (prev) {
      return [
        {
          id: v4(),
          content,
          date,
          time,
        },
        ...prev,
      ];
    });
  }

  return (
    <div>
      <h1>My Notes</h1>
      <p>Content</p>
      <input type="text" value={content} onChange={changeContent} />
      <p>Date</p>
      <input type="date" value={date} onChange={changeDate} />
      <p>Time</p>
      <input type="time" value={time} onChange={changeTime} />
      <button className="add" onClick={addNote}>
        Add
      </button>
    </div>
  );
};

export default Edit;
