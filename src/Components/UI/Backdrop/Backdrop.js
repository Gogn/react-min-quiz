import React from 'react';
import classes from './Backdrop.module.css'

const cls = [
  classes.Backdrop,
  // classes.shader
]

const Backdrop = props => {

  if (props.isOpen) {
    cls.push('shader')
    console.log('asdasdasdasdasdasdsad')
  } else {
    cls.push('shader')
    console.log('123213123')
  }

  return (
    <div className={cls.join(' ')} onClick={props.onClick}/>
  )
}

export default Backdrop