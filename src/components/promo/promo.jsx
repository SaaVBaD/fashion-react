import './promo.css';
import promoImg from './../../images/header-img.jpg'

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo__title">
                            <span className="highlight">
                                <span>LET'S</span>
                            </span>

                            EXPLORE

                            <span className="highlight highlight--yellow">
                                <span>UNIQUE</span>
                            </span>

                            CLOTHES.
                        </div>
                        <div className="promo__desc">
                            Live for Influential and Innovate fashion!
                        </div>
                        <div className="promo__btn-wrapper">
                            <a href="#!" className="promo__btn">
                                Shop now
                            </a>
                        </div>
                    </div>
                    <div className="promo__image">
                        <img src={promoImg} alt="Promo"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;