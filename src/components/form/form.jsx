import './form.css';

const Form = () => {
    return (
        <section className="form">
            <div className="container">
                <div className="form__title">
                    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                </div>
                <div className="form__text">
                    Type your email down below and be young wild generation
                </div>
                <form className="form__form">
                    <input type="email" placeholder="Add your email here"/>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </section>
    );
}

export default Form;