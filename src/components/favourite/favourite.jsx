import './favourite.css';
import fav01Img from "../../images/01.jpg";
import fav02Img from "../../images/02.jpg";
import CardFav from "../cardFav/cardFav";

const Favourite = () => {
    return (
        <section className="favourite">
            <div className="container">
                <div className="favourite__header">
                    <h2 className="title-2">Young’s Favourite</h2>
                </div>
                <div className="favourite__cards">
                    <CardFav title="Trending on instagram" img={fav01Img}/>
                    <CardFav title="All Under $40" img={fav02Img}/>
                </div>
            </div>
        </section>
    )
}

export default Favourite;