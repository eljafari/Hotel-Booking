import "./Header.css";
import HotelIcon from '@mui/icons-material/Hotel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LuggageIcon from '@mui/icons-material/Luggage';
import CarRentalIcon from '@mui/icons-material/CarRental';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

import 'react-date-range/dist/styles.css'; // main css file for calendar
import 'react-date-range/dist/theme/default.css'; // theme css file calendar
import { format } from "date-fns";

import { DateRange } from 'react-date-range';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



export default function
    ({ type }) {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        children: 0,
        rooms: 1
    });
    const handelOptions = (name, oprator) => {
        setOptions(prev => {
            return {
                ...prev, [name]: oprator === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const navigate = useNavigate();
    // we can redirect user to any component or any page 
    const handleSearch = () => {
        navigate('hotels', { state: { destination, date, options } })
    }

    return (
        <div className="header">
            <div className={type === "hotels" ? "headerContainer hotelMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <HotelIcon />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FlightTakeoffIcon />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <LuggageIcon />
                        <span>Flight+ Hotel</span>
                    </div>
                    <div className="headerListItem">
                        <CarRentalIcon />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <AttractionsIcon />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <LocalTaxiIcon />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                {type !== "hotels" &&
                    <><h1 className="headerTitle">Find your next stay</h1>
                        <p className="headerDescription">
                            Search low prices on hotels, homes and much more...
                        </p>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <HotelIcon className="headerIcon" />
                                <input onChange={(e) => setDestination(e.target.value)} type="text" placeholder="Where are you going?" className="headerSearchInput" />
                            </div>
                            <div className="headerSearchItem">
                                <CalendarMonthIcon className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                                    {format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}
                                </span>
                                {openDate && <DateRange
                                    // editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    // moveRangeOnFirstSelection={false}
                                    minDate={new Date()}
                                    ranges={date}
                                // className='date'
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <PersonIcon className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                                    {`${options.adults} adult, ${options.children} children, ${options.rooms} room`}
                                </span>
                                {openOptions && <div className="options">
                                    <div className="optionsItem">
                                        <span className="optionText">Adults</span>
                                        <div className="optionCounter">
                                            <button disabled={options.adults <= 1} onClick={() => handelOptions('adults', 'd')} className="optionCounterBtn">-</button>
                                            <span className="optionCounterNumber">{options.adults}</span>
                                            <button onClick={() => handelOptions('adults', 'i')} className="optionCounterBtn">+</button>
                                        </div>
                                    </div>
                                    <div className="optionsItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button disabled={options.children <= 0} onClick={() => handelOptions('children', 'd')} className="optionCounterBtn">-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button onClick={() => handelOptions('children', 'i')} className="optionCounterBtn">+</button>
                                        </div>
                                    </div>
                                    <div className="optionsItem">
                                        <span className="optionText">Rooms</span>
                                        <div className="optionCounter">
                                            <button disabled={options.room <= 1} onClick={() => handelOptions('rooms', 'd')} className="optionCounterBtn">-</button>
                                            <span className="optionCounterNumber">{options.rooms}</span>
                                            <button onClick={() => handelOptions('rooms', 'i')} className="optionCounterBtn">+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button onClick={handleSearch} className="headerSerchButton">
                                    Search
                                </button>
                            </div>
                        </div></>}
            </div>
        </div>

    )
}
