import React from 'react';
// import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = props => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
