import React, { useState } from "react";
import app from "../FirebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

function JavascriptFetch() {
  let [questionArray, setQuestionArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "testing/questions");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setQuestionArray(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  };

  fetchData();
  return (
    <div>
      <h2>Data:</h2>
      <button onClick={fetchData}>Refresh</button>
      <ol>
        {questionArray.map((item, index) => (
          <li key={index}>
            {item.questionText} [{item.questionID}]
          </li>
        ))}
      </ol>
      <span>test</span>
    </div>
  );
}

export default JavascriptFetch;
