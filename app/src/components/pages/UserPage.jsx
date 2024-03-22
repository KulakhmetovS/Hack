import React from 'react';
import classes from './UserPage.module.css';
import Header from '../ui/header/Header';
import Panel from '../ui/panel/Panel';
import profile_image from '../../images/cat.jpeg';
import award_image from '../../images/award.jpg';

const UserPage = () => {

    return (
      <div className={classes.page}>
        <div className={classes.left_panel}><Panel /></div>
        <div className={classes.right_panel}>
          <div><Header /></div>
          <div className={classes.content}>
            <div className={classes.profile_container}>
              <div className={classes.profile}>
                <img src={profile_image}/>
                <div className={classes.score}><div>Кол-во очков</div></div>
              </div>
              <div className={classes.description}>
                <div className={classes.userinfo_container}>
                  <div className={classes.info}>Псевдрним</div>
                  <div className={classes.field}></div>
                </div>
                <div className={classes.userinfo_container}>
                  <div className={classes.info}>Почта</div>
                  <div className={classes.field}></div>
                </div>
                <div className={classes.raiting}>
                  <div className={classes.place}>Вы на таком-то месте в рейтинге</div>
                </div>
              </div>
            </div>
            <div className={classes.awards}>
              <div className={classes.awards_text}>Стенд достижений</div>
              <div className={classes.award_images}>
                <img src={award_image} className={classes.small_image}/>
                <img src={award_image} className={classes.big_image}/>
                <img src={award_image} className={classes.small_image}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserPage;
