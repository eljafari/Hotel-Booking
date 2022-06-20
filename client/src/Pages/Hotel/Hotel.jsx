import './Hotel.css';
import Navbar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

import { useState } from 'react';

export default function Hotel() {
    const [slideNum, setSlideNum] = useState(0);
    const [openSlide, setOpenSlide] = useState(false);

    const photos = [
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/266404963.jpg?k=e42b08aea89d7d667e10601a4a7f96ad8f8a491dad5c8e996dc06f1d25afd14e&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/161185553.jpg?k=be44ddc222357432d8054427cfc802200e233de14e1ba2fda19a11e1d85790f4&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/266404968.jpg?k=516c541782a8f8622a3d998aa3f3405e8f55f027286c9c3b8363df4a9a6d0f7a&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/137522014.jpg?k=dc8469b12039b9d2b24c1aa1aaaa184b99f70c96a1a2c206b6968f41a36e0bcf&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/137521657.jpg?k=67d1b51f0a11449e207ea4307e10a513a765bf655a0fa5a81f819aa27b60de12&o=&hp=1'
        },
        {
            src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/347896446.jpg?k=da65d826c48d493ac0eb3d103489498667c44e414fc5bac019288cbe2af9b9d4&o=&hp=1'
        },
    ]
    return (
        <div>
            <Navbar />
            <Header type='hotels' />
            <div className="hotelContainer">

                <div className="hotelWrapper">
                    {openSlide && <div className="slide">
                        <CancelPresentationIcon className='closeSlide' onClick={() => setOpenSlide(false)} />
                        <ArrowBackIosNewIcon />
                        <div className="sliderWrapper">
                            <img src={photos[slideNum].src} alt="" className="sliderImg" />
                        </div>
                        <ArrowForwardIosIcon />
                    </div>}
                    <button className='reserveBtn'>Reserve Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAdd">
                        <PinDropIcon />
                        <span>4295 Blackcomb Way, V8E0X2 Whistler, Canada </span>
                    </div>
                    <span className="hotelDistance">Excellent location - show map</span>
                    <div className="hotelImgs">
                        {photos.map((photo, ind) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => { setSlideNum(ind); setOpenSlide(true) }} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailText">
                            <h1>Stay in the heart of Whistler</h1>
                            <p className='hotelDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis provident fuga voluptatum exercitationem iste tempora corporis eum vero facere aut tempore adipisci quas blanditiis accusantium incidunt, laborum laudantium perferendis est.</p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1 >Perfect for 7night stay</h1>
                            <span>Situated in the real heart of Whistler, this hotel has an excellent location score of 9.3
                            </span>
                            <h2>
                                <b>$921</b> (7 nights)
                            </h2>
                            <button >Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
