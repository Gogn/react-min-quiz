import React, {Component} from "react";
import classes from './AnswersList.module.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
  return(
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}  //Тернарный оператор - потому что по умолчанию state=null; для избежания ошибок; проверка, что он не null
          />
        )
      })}
    </ul>
  )
}

export default AnswersList