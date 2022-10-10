import React, { useState, useEffect } from "react";
import './GameConsole.css';
import Letter from "./Letter.jsx";
import Header from "../Header";
import Footer from "../Footer";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

export default () => {
  const username=sessionStorage.getItem("username");

  const [message, setMessage] = useState(null);
  const [game, setGame] = useState({
    questions: [
      {
        question: "Fruit - Which is Red in Colour!!!!",
        answer: "Apple",
        isAsked: false
      },
      {
        question: "Cartoon Character!!",
        answer: "Doreamon",
        isAsked: false
      },
      {
        question: "Country!!",
        answer: "China",
        isAsked: false
      },
      {
        question: "Sports",
        answer: "FootBall",
        isAsked: false
      },
      {
        question: "Animal!!",
        answer: "Turtle",
        isAsked: false
      },
      {
        question: "Found At Home!!",
        answer: "MicroWave",
        isAsked: false
      },
      {
        question: "Cartoon Character!!",
        answer: "Doreamon",
        isAsked: false
      }, 
      {
        question: "Planet!!",
        answer: "Jupiter",
        isAsked: false
      },
      {
        question: "Famous Scientist!!",
        answer: "Einstein",
        isAsked: false
      },

      
    ],
    totalScore: 0,
    scoreOfQuestion: 0,
    letters: [],
    currentQuestion: null,
    isStarted: false,
    usersAnswer: "",
    remainingTime: 0,
    isFinished: false,
    message: null,
    messageClass: ""
  });

  useEffect(() => {
    if (game.remainingTime > 0) {
      const time = setInterval(() => {
        setGame({ ...game, remainingTime: game.remainingTime - 1 });
      
      
      }, 1000);

      return () => {
        clearInterval(time);
      };
    }
  });

  const alertMessage = isTrue => {
    if (isTrue) {
      setMessage({
        message: "Correct Answer!",
        alertMessageClass: "alert-success"
      });
    } else {
      setMessage({
        message: "Wrong Answer!",
        alertMessageClass: "alert-danger"
      });
    }
  };

  const startGame = () => {
    let gameTemp = { ...game };
    gameTemp.isStarted = true;
    gameTemp.remainingTime = 60;
    gameTemp.isFinished = false;
    gameTemp.totalScore = 0;
    gameTemp.questions = gameTemp.questions.map(q => {
      q.isAsked = false;
      return q;
    });
    gameTemp = askQuestion(gameTemp);
    setGame({ ...gameTemp }); 
    if(gameTemp.remainingTime==0){
      
    }
  };

  const askQuestion = gameTemp => {
    let questions = gameTemp.questions;
    let question = questions.find(q => !q.isAsked);
    let time=gameTemp.remainingTime;

    if (!question) {
      gameTemp.currentQuestion = null;
      return gameTemp;
    }
    if(time==0){
      gameTemp.currentQuestion = null;
      return gameTemp;
    }

    question.isAsked = true;
    const letters = [];

    question.answer.split("").map(l => {
      const letter = {
        letter: "",
        isOpened: false
      };
      letter.letter = l;
      letters.push(letter);
      return l;
    });
    gameTemp.scoreOfQuestion = 100 * letters.length;
    gameTemp.currentQuestion = question;
    gameTemp.letters = letters;
    return gameTemp;
  };

  const answer = () => {
    let gameTemp = { ...game };
    if (
      game.usersAnswer.toLocaleUpperCase("tr") ===
      game.currentQuestion.answer.toLocaleUpperCase("tr")
    ) {
      gameTemp.totalScore += gameTemp.scoreOfQuestion;
      alertMessage(true);
    } else {
      gameTemp.totalScore -= gameTemp.scoreOfQuestion;
      alertMessage(false);
    }
    gameTemp.usersAnswer = "";
    gameTemp = askQuestion(gameTemp);

    if (!gameTemp.currentQuestion) {
      gameTemp = finishGame(gameTemp);
    }
    gameTemp = setGame({ ...gameTemp });
  };

  const finishGame = gameTemp => {
    gameTemp.isFinished = true;
    gameTemp.isStarted = false;
    setMessage(null);
    return gameTemp;
  };

  const changeAnswer = e => {
    setGame({ ...game, usersAnswer: e.target.value });
  };

  const showLetter = () => {
    let randomIndex = Math.floor(Math.random() * game.letters.length);
    console.log(randomIndex);
    const letters = game.letters;
    while (game.letters[randomIndex].isOpened) {
      if (!game.letters.find(l => !l.isOpened)) {
        console.log("doesnt exist");
        return;
      }
      randomIndex = Math.floor(Math.random() * game.letters.length);
    }
    letters[randomIndex].isOpened = true;
    setGame({ ...game, letters, scoreOfQuestion: game.scoreOfQuestion - 100 });
  };
  

  return (
    <div><Header/>
     

    <div className="console-Body">
    <div className="main-container">
      <div className="card">
        <div className="card-content">
          <div className="Cardheader">
            <div className="heading1"><a href="https://www.fontspace.com/category/pixel"><img src="https://see.fontimg.com/api/renderfont4/PKZgZ/eyJyIjoiZnMiLCJoIjozMywidyI6MTUwMCwiZnMiOjIyLCJmZ2MiOiIjMjkyNDI0IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/R3Vlc3MgVGhlIFdvcmQ/elfboyclassic.png" alt="Pixel fonts"/></a></div>
          </div>
          &ensp;
          &ensp;
          {!game.isStarted && (
            <div className="card-body">
              <div className="TextCenter">
                Welcome to Word-Mania . If you want to have fun, you can click the
                button below.
              </div>
              <div className="textcenter">Have a good time!</div>

              {game.isFinished && (
                <div className="text-center">
                  Congratulations! Your score : {game.totalScore}
                </div>
              )}

              <div className="start mt-2 text-center">
                <button
                  type="submit"
                  className="startbutton"
                  onClick={startGame}
                >
                  Start the game
                </button>
              </div>
            </div>
          )}
          &ensp;
          &ensp;
          {game.isStarted && (
            <div className="card mt-2">
              <h3 style={{color:"Red"}}>HINT</h3>
              <div className="card-header">
                <span>{game.currentQuestion.question}</span>
              </div>
              <div className="card-body">
              
                <div className="flex-boxes">
                  
                  {game.letters.map((letter, index) => {
                    return <Letter letter={letter} key={index} />;
                  })}
                </div>
              </div>
              &ensp;
              &ensp;

              <div className="card-footer">
                <div className="d-flex">
                  <div className="TotalScore">Total Score : {game.totalScore}</div>
                  <div className="ReamainingTime">
                    Remaining Time : <mark>{game.remainingTime}</mark>
                  </div>
                  <div className="ScoreOfQuestion">Score Of Question : {game.scoreOfQuestion}</div>
                </div>
              </div>
&ensp;
&ensp;

              <div className="CardFooter">
                <div className="InputGroup">
                  <input
                    className="FormControl"
                    placeholder="Your Answer Please"
                    value={game.usersAnswer}
                    onChange={changeAnswer}
                  />
                  &ensp;
                  &ensp;
                  &ensp;
                  &ensp;
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-primary ml-2"
                      onClick={showLetter}
                    >
                      Give me a letter
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary ml-2"
                      onClick={answer}
                    >
                      Send this answer
                    </button>
                   
                  </div>
                </div>
              </div>
              {message && (
                <div className={"card-footer " + message.alertMessageClass}>
                  {message.message}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>

    <div>
      <Footer/>
    </div>
    </div>
   
    
    
    

  );
};
