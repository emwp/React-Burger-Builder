import React from 'react';
// import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <React.Fragment>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
