import { Link } from "react-router-dom";
import "./SearchItem.css";

export default function SearchItem({ item }) {
    return (
        <div className="searchItem">
            <img src={item.imagesURL} alt="" className="siImg" />
            <div className="siDescription">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance} from center</span>
                <span className="siTaxiOp">{item.features && 'Free airport taxi'}</span>
                <span className="siSubtitle">Studio with air conditioner</span>
                <span className="siFeatures">{item.description}</span>
                <span className="siCancel">Free cancelation</span>
                <span className="siCancelSubT">You may cancel later </span>
            </div>
            <div className="siDetails">
                {item.rating && < div className="siRating">
                    <span>Excelent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckBtn">See availability</button>
                    </Link>
                </div>

            </div>
        </div >
    )
}
