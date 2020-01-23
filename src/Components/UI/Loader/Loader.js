import React from 'react'
import classes from './Loader.module.css'

export default Loader => (
  // https://loading.io/css
  <div className={classes.center}>
    <div className={classes.Loader}>
      <div/>
      <div/>
    </div>
  </div>
)