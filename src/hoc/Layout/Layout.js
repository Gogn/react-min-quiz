import React, {Component} from 'react';
import classes from './Layout.module.css'
import MenuToggle from "../../Components/Navigation/MenuToggle/menuToggle";
import Drawer from "../../Components/Navigation/Drawer/Drawer";

class Layout extends Component {

  state ={
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }


  render() {
    return (
      <div className={classes.Layout}>

        <Drawer
          isOpen={this.state.menu}
          onClose={this.toggleMenuHandler}
        />

        <MenuToggle
        onToggle={this.toggleMenuHandler}
        isOpen={this.state.menu}
        />

        <main className={classes.Layout}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout