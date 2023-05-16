import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Quiz.css";
import * as api from "../../api/api.js";
import QuestionsCard from "../../components/questionCard/QuestionsCard";
import Modal from "../../components/modal/Modal";

const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
  }, []);

  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score} />
      ) : (
        <QuestionsCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Quiz;
