import React from 'react';
import classes from './UserPage.module.css';
import Header from '../ui/header/Header';
import Panel from '../ui/panel/Panel';

const UserPage = () => {

    return (
      <div className={classes.page}>
        <div className={classes.left_panel}><Panel /></div>
        <div className={classes.right_panel}>
          <div><Header /></div>
          <div className={classes.content}>
            <div className={classes.profile_container}>
              <div className={classes.profile}>
              </div>
              <div className={classes.description}>
              </div>
            </div>
            <div className={classes.awards}>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserPage;
