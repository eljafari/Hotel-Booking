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


export default function Hotels() {
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false)

    const location = useLocation();
    // console.log(location);
    const [date, setDate] = useState(location.state.date);
    const [destination, setDestination] = useState(location.state.destination);
    const [options, setOptions] = useState(location.state.options);

    const handelOptions = (name, oprator) => {
        setOptions(prev => {
            return {
                ...prev, [name]: oprator === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

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
                            <input placeholder={destination} type="text" className="lsInput" />
                        </div>
                        <div className="lsItem">
                            <label >Check-in Date</label>
                            <span onClick={() => { setOpenDate(!openDate) }}>
                                {format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}
                            </span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                            // className='date'
                            />}
                        </div>

                        <div className="lsItem">
                            <label >Options</label>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min Price <small>  . per night</small>
                                </span>
                                <input min={0} type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Max Price <small>  . per night</small>
                                </span>
                                <input min={0} type="number" className="lsOptionInput" />
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
                                    Rooms
                                </span>
                                <input min={1} placeholder={options.rooms} type="number" className="lsOptionInput" />
                            </div>
                        </div>

                        <button className="lsBtn">Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
