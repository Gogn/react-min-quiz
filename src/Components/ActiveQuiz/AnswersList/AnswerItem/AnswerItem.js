import React from "react";
import classes from './AnswerItem.module.css'

const AnswerItem = props  => {
    const cls = [classes.AnswerItem] // Массив классов

    if (props.state) {
        console.log(props.state)
        cls.push(classes[props.state]) //Передаем в стиль для li success или error
    }

    return(
        <li className={cls.join(' ')} //Добавляем к классу параметр
        onClick={()=>props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem