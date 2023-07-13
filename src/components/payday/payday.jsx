import './payday.css';
import paydayImg from './../../images/promo-img.jpg';

const Payday = () => {
    return (
        <section className="payday">
            <div className="payday__content">
                <img src={paydayImg} alt="paydayImg" className="payday__image"/>
                <div className="payday__block">
                    <div className="payday__title">
                        <span className="payday-highlight">
                                <span>PAYDAY</span>
                        </span>
                        <span>SALE NOW</span>
                    </div>
                    <div className="payday__text">
                        <div className="payday__text-first">
                            Spend minimal $100 get 30% off
                            voucher code for your next purchase
                        </div>
                        <div className="payday__text-second">
                            1 June - 10 June 2021
                        </div>
                        <div className="payday__text-third">
                            *Terms & Conditions apply
                        </div>
                    </div>
                    <button className="payday__btn">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Payday;