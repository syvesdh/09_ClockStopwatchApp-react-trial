import React, { useEffect, useState } from "react";
import app from "../FirebaseConfig";
import { getDatabase, ref, set, get } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

function JavascriptEdit() {
  const navigate = useNavigate();
  const { firebaseid } = useParams();

  const [inputQuestionID, setInputQuestionID] = useState("");
  const [inputQuestionText, setInputQuestionText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "testing/questions/" + firebaseid);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const targetObject = snapshot.val();
        setInputQuestionID(targetObject.questionID);
        setInputQuestionText(targetObject.questionText);
      } else {
        alert("error");
      }
    };
    fetchData();
  }, [firebaseid]);

  const updateData = async () => {
    const db = getDatabase(app);
    const docRef = ref(db, "testing/questions/" + firebaseid);
    set(docRef, {
      questionID: inputQuestionID,
      questionText: inputQuestionText,
    })
      .then(() => {
        alert("data updated successfully");
        navigate("/firebase");
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
      <button onClick={updateData}>Update Data</button>
      <button onClick={() => navigate("/firebase")}>Back</button>
    </div>
  );
}

export default JavascriptEdit;
