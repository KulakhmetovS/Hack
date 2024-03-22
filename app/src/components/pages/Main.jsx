import React from 'react';
import classes from './Main.module.css';
import Header from '../ui/header/Header';
import Panel from '../ui/panel/Panel';

const Main = () => {

    return (
      <div className={classes.content}>
        <div className={classes.left_panel}><Panel /></div>
        <div className={classes.right_panel}><Header /></div>
      </div>
    );
};

export default Main;
