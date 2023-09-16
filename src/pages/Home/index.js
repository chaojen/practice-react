import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setNotes) {
  const res = await fetch(API_GET_DATA);
  const { notes } = await res.json();
  setNotes(notes);
}

async function putData(notes) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ notes }),
  });
}

const Home = () => {
  const [notes, setNotes] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    putData(notes).then((notes) => (submittingStatus.current = false));
  }, [notes]);

  useEffect(() => {
    fetchData(setNotes);
  }, []);

  return (
    <div className="app">
      <Edit add={setNotes} submittingStatus={submittingStatus} />
      <List
        notes={notes}
        remove={setNotes}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
