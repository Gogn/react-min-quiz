import React, {Component} from 'react';
import classes from './Layout.module.css'

class Layout extends Component {
  render() {
    return (
      <div>
        <main className={classes.Layout}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout