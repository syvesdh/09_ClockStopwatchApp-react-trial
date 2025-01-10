import React, { useEffect, useState } from "react";
import app from "../FirebaseConfig";
import { getDatabase, ref, get, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";

function JavascriptFetch() {
  const navigate = useNavigate();
  let [questionArray, setQuestionArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "testing/questions");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const myData = snapshot.val();
      const temporaryArray = Object.keys(myData).map((myFireId) => {
        return { ...myData[myFireId], fireId: myFireId };
      });
      setQuestionArray(temporaryArray);
    } else {
      alert("error");
    }
  };

  const deleteDoc = async (fireIdParam) => {
    const db = getDatabase(app);
    const dbRef = ref(db, "testing/questions/" + fireIdParam);
    await remove(dbRef);
    window.location.reload();
  };

  useEffect(() => {
    fetchData();
    const fetchInterval = setInterval(fetchData, 5000);
    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

  return (
    <div>
      <h2>Data:</h2>
      <button onClick={fetchData}>Refresh</button>
      <ol>
        {questionArray.map((item, index) => (
          <li key={index}>
            {item.questionText} [{item.questionID}]{" "}
            <sub style={{ color: "grey" }}>[{item.fireId}]</sub>
            <button onClick={() => navigate(`/firebase/edit/${item.fireId}`)}>
              Update
            </button>
            <button onClick={() => deleteDoc(item.fireId)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default JavascriptFetch;
