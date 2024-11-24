import React from "react";
import dummy from "../db/db.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  console.log(wordList);

  return (
    <>
      <h2>Day{day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
