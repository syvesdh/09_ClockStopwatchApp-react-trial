import React, { useState } from "react";
import app from "../FirebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

function JavascriptWrite() {
  const [inputQuestionID, setInputQuestionID] = useState("");
  const [inputQuestionText, setInputQuestionText] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "testing/questions"));
    set(newDocRef, {
      questionID: inputQuestionID,
      questionText: inputQuestionText,
    })
      .then(() => {
        alert("data saved successfully");
      })
      .catch(() => {
        alert("error: ", error.message);
      });
  };

  return (
    <div>
      <span> Question ID: </span>
      <input
        type="number"
        value={inputQuestionID}
        onChange={(e) => {
          setInputQuestionID(e.target.value);
        }}
        placeholder="271382"
      />
      <br />
      <span> Question: </span>
      <input
        type="text"
        value={inputQuestionText}
        onChange={(e) => {
          setInputQuestionText(e.target.value);
        }}
      />
      <br />
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}

export default JavascriptWrite;
