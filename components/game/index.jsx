import style from "./game.module.scss";
import { useState } from "react";
import { words } from "../../libs/data";
import Iflose from "../ifLose";
import { changePoint, handleLose } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
//----------------------------------
export default function Game() {
  const [inputText, setInputText] = useState("");
  const [word, setWord] = useState("start");
  const [time, setTime] = useState(5);
  const [point, setPoint] = useState(0);
  const [interval, setIInterval] = useState(null);
  const pointCurrent = useSelector((state) => state.point);
  const dispatch = useDispatch();
  let timer = time;

  function changeWord() {
    clearInterval(interval);
    timer = time + 2;
    setTime(timer);
    setInputText("");
    setWord(words[Math.floor(Math.random() * words.length)]);
    setPoint((prev) => prev + 1);
    setIInterval(
      setInterval(() => {
        timer--;
        setTime(timer);
        if (timer == 0) {
          clearInterval(interval);
        }
      }, 1000)
    );
    dispatch(changePoint(point));
  }

  function handleChange(e) {
    setInputText(e.target.value);
    e.target.value === word && changeWord();
  }

  return (
    <div className={style.container}>
      <div className={style.counter}>
        <p>secondi rimanenti: {time > 0 ? time : 0}</p>
        <p>punteggio: {pointCurrent}</p>
      </div>

      {time > 0 ? (
        <>
          <div className={style.screen}>
            <p>scrivi questa parola</p>
            <h2>{word}</h2>
          </div>

          <div className={style.input}>
            <input
              value={inputText}
              type="text"
              placeholder="start"
              onChange={handleChange}
            />
          </div>
        </>
      ) : (
        <Iflose set={setTime} />
      )}
    </div>
  );
}
