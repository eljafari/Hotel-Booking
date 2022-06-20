import "./SearchItem.css";

export default function SearchItem() {
    return (
        <div className="searchItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/266487749.webp?k=b9b1ada5aa48b4497dcee4aadca23cdeab195dd04956c36af88f77a25669a380&o=&s=1" alt="" className="siImg" />
            <div className="siDescription">
                <h1 className="siTitle">title</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio with air conditioner</span>
                <span className="siFeatures">Entire Studio .1 bathroom . 21m</span>
                <span className="siCancel">Free cancelation</span>
                <span className="siCancelSubT">You may cancel later </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excelent</span>
                    <button>8.4</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckBtn">See availability</button>
                </div>

            </div>
        </div>
    )
}
