import './arrivals.css';
import Card from "../card/card";
import cat01Img from './../../images/categories/01.jpg';
import cat02Img from './../../images/categories/02.jpg';
import cat03Img from './../../images/categories/03.jpg';

const Arrivals = () => {
    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__header">
                    <h2 className="title-2">NEW ARRIVALS</h2>
                </div>
                <div className="arrivals__cards">
                    <Card title="Hoodies & Sweetshirt" img={cat01Img}/>
                    <Card title="Coats & Parkas" img={cat02Img}/>
                    <Card title="Tees & T-Shirts" img={cat03Img}/>
                </div>
            </div>
        </section>
    );
}

export default Arrivals