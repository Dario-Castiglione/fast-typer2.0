import style from "./iflose.module.scss";
import db from "../../firebase";
import { useState, useEffect } from "react";
import { onSnapshot, collection, addDoc } from "firebase/firestore";

import { useSelector } from "react-redux";
export default function Iflose() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const selector = onSnapshot(collection(db, "result"), (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return selector;
  }, []);

  const handleClick = async () => {
    const collectionRef = collection(db, `result`);
    const payload = {
      nome: inputText,
      punteggio: point,
    };
    await addDoc(collectionRef, payload);
  };

  const point = useSelector((state) => state.point);
  return (
    <>
      <button onClick={() => window.location.reload()}>TORNA INDIETRO</button>
      <div className={style.container}>
        <h1>hai perso con {point} punti</h1>
        <div className={style.top}>
          <p>inserisci il tuo nome</p>
          <div>
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              type="text"
            />
            <button onClick={handleClick}>invia</button>
          </div>
        </div>
        <div className={style.result}>
          {data &&
            data.map((el, id) => (
              <div key={id}>
                <p>{el.nome}</p>
                <p>{el.punteggio} punti</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
