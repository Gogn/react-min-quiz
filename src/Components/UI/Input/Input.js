import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched //Если контрол не валидированный и мы должны его валидировать и уже его потрогали - значит, что он невалидный
}

const Input = props => {

  const inputType = props.type || 'text' //text - по умолчанию
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}` //Генерация индентефикатора для связывания в htmlFor (label - for)

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {  //Если в функции тру - показать сообщение об ошибке
        isInvalid(props)
          ? <span>{props.errorMessage || 'Введите верное значение'}</span>
          : null
      }

    </div>
  )
}

export default Input