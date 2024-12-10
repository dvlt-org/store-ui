import "./components.css"
import Apple from "../assets/apple.png"
import ButtonArrow from "../assets/buttonArrow.png"
import Iphone from "../assets/iphone.png"


export default function Header() {
    return (
        <div className="header navbar">
            <div className="navbarContainer headerContent">
                <div className="sliderIcons">
                    <div className="sliderIcon"></div>
                    <div className="sliderIcon"></div>
                    <div className="sliderIcon active"></div>
                    <div className="sliderIcon"></div>
                    <div className="sliderIcon"></div>
                </div>
                <div className="headerLeft">
                    <div className="headerIconText">
                        <img src={Apple} alt="apple icon" />
                        <p>Iphone 14 series</p>
                    </div>
                    <h1>
                        Up to 10% off Voucher
                    </h1>
                    <div className="headerTextButton">
                        <button>Shop Now</button>
                        <img src={ButtonArrow} alt={ButtonArrow} />
                    </div>
                </div>
                <div className="headerRight">
                    <img src={Iphone} alt={Iphone} />
                </div>
            </div>
        </div>
    )
}
