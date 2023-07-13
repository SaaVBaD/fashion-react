import './download.css';
import voucherImg from './../../images/vouchers-img.png';
import gpImg from './../../images/google-play.png';
import asImg from './../../images/app-store.png';

const Download = () => {
    return (
        <section className="download">
            <div className="container">
                <div className="download__content">
                    <div className="download__card">
                        <div className="download__title">
                            <div>DOWNLOAD APP &</div>
                            <div>GET THE VOUCHER!</div>
                        </div>
                        <div className="download__text">
                            <div>Get 30% off for first transaction using</div>
                            <div>Rondovision mobile app for now.</div>
                        </div>
                        <div className="download__images">
                            <a href="#"><img src={asImg} alt="appstoredownload"/></a>
                            <a href="#"><img src={gpImg} alt="googleplaydownload"/></a>
                        </div>
                    </div>
                    <img className="download__image" src={voucherImg} alt="voucher"/>
                </div>
            </div>
        </section>
    );
}

export default Download;