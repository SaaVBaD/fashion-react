import styles from "./cardFav.module.css";
import arrowImg from './../../images/Arrow.svg';

const CardFav = (props) => {
    return (
        <div className={styles.card}>
            <a href="#!" className={styles.card__link}></a>
            <img className={styles.card__img} src={props.img} alt="cardFav"/>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>
                        {props.title}
                    </div>
                    <div className={styles.card__muted}>
                        Explore Now!
                    </div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt="Open"/>
                </div>
            </div>
        </div>
    );
}

export default CardFav;