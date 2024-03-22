import React from 'react';
import classes from './Panel.module.css';

const Panel = () => {

    return (
      <div className={classes.main_panel}>
        <a href="/main_page" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className={classes.logo}><div>Лого</div></div>
        </a>
      </div>
    );
};

export default Panel;
