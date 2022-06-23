import './Hotels.css';
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file for calendar
import 'react-date-range/dist/theme/default.css'; // theme css file calendar
import SearchItem from '../../Components/SearchItem/SearchItem';
import UseFetch from '../../Hooks/fetchs';


export default function Hotels() {
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false)

    const location = useLocation();
    console.log(location.state.date, "loc");
    const [date, setDate] = useState(location.state.date);
    const [destination, setDestination] = useState(location.state.destination);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);


    const { data, loading, error, ReFetchData } = UseFetch(`http://localhost:5000/api/v1/hotels`);
    console.log(data, 'dataaaaaaaaaaaaaaa');
    const handleClick = () => {
        ReFetchData(`http://localhost:5000/api/v1/hotels?city=${destination}`);
        console.log(`http://localhost:5000/api/v1/hotels?city=${destination}`);
    };
    return (
        <div>
            <Navbar />
            <Header type="hotels" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lSearchTitle">
                            Search
                        </h1>
                        <div className="lsItem">
                            <label >Destination</label>
                            <input onChange={(e) => setDestination(e.target.value)} placeholder={destination} type="text" className="lsInput" />
                        </div>
                        <div className="lsItem">
                            <label >Check-in Date</label>
                            <span onClick={() => { setOpenDate(!openDate) }}>
                                {format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}
                            </span>
                            {openDate && <DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />}
                        </div>

                        <div className="lsItem">
                            <label >Options</label>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min Price <small>  . per night</small>
                                </span>
                                <input min={0} onChange={(e) => setMin(e.target.value)} type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Max Price <small>  . per night</small>
                                </span>
                                <input min={0} onChange={(e) => setMax(e.target.value)} type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Adult
                                </span>
                                <input min={1} placeholder={options.adult} type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Children
                                </span>
                                <input min={0} placeholder={options.children} type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Room
                                </span>
                                <input min={1} placeholder={options.rooms} type="number" className="lsOptionInput" />
                            </div>
                        </div>

                        <button onClick={handleClick} className="lsBtn">Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? "loading" : (
                            <>
                                {data.map(item => <SearchItem item={item} />)}
                                {/* {console.log(data, 'dataaa')} */}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
