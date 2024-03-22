import classes from './Header.module.css';
import image from '../../../images/cat.jpeg';

const Header = () => {
  return (
    <div className={classes.header_container}>

      <div className={classes.line}>
        <div className={classes.image_container}>
          <div className={classes.rating}><div>Рейтинг</div></div>
          <a href="/user_page"><img className={classes.profile_image} src={image} /></a>
          </div>
        </div>
    </div>
  )
}

export default Header;
