import './footer.css';
import fb from "./../../images/fb.svg";
import inst from "./../../images/inst.svg";
import tw from "./../../images/tw.svg";
import ln from "./../../images/in.svg";
const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__about">
                        <div className="footer__title">
                            FASHION
                        </div>
                        <div className="footer__text">
                            Complete your style with awesome clothes from us.
                        </div>
                        <div className="footer__icons">
                            <img src={fb} alt="facebook"/>
                            <img src={inst} alt="instagram"/>
                            <img src={tw} alt="twitter"/>
                            <img src={ln} alt="in"/>
                        </div>
                    </div>
                    <div className="footer__links">
                        <div className="footer__link">
                            <div className="footer__maintext">Company</div>
                            <div className="defaulttext">About</div>
                            <div className="defaulttext">Contact us</div>
                            <div className="defaulttext">Support</div>
                            <div className="defaulttext">Careers</div>
                        </div>
                        <div className="footer__link">
                            <div className="footer__maintext">Quick Link</div>
                            <div className="defaulttext">Share Location</div>
                            <div className="defaulttext">Orders Tracking</div>
                            <div className="defaulttext">Size Guide</div>
                            <div className="defaulttext">FAQs</div>
                        </div>
                        <div className="footer__linkt">
                            <div className="footer__maintext">Legal</div>
                            <div className="defaulttext">Terms & conditions</div>
                            <div className="defaulttext">Privacy Policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;