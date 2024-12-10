import Star from "../assets/star.png"
import PlaystationPult from "../assets/playsitationPult.png"

export default function Product() {
    return (
        <div className="product">
            <div className="productImg">
                <img src={PlaystationPult} alt="discount products" />
                <button>Add to Cart</button>
            </div>
            <div className="productTexts">
                <h1>HAVIT HV-G92 Gamepad</h1>
                <div className="productPrices">
                    <span className="productPriceDiscount">120$</span>
                    <span className="productPrice">160$</span>
                </div>
                <div className='productRating'>
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <img src={Star} alt={Star} />
                    <div className="productRatingComments">
                        (88)
                    </div>
                </div>
            </div>
        </div>
    )
}
