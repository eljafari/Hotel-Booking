import React from 'react';
import "./Featured.css";


export default function Featured() {
    return (
        <>
            <div className='featured'>
                <div className="featuredItem">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Canada_Place_%28213050673%29.jpeg" alt="Vancouver" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1>Vancouver, Canada</h1>
                        <h2>420 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://edmontonfetalalcoholnetwork.org/wp-content/uploads/2018/04/2017314-city-resize_then_crop-_frame_bg_color_fff-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.jpg" alt="Toronto" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1 >Toronto, Canada</h1>
                        <h2>520 properties</h2>
                    </div>
                </div>
            </div>
            <div className='featured'>
                <div className="featuredItem">
                    <img src="https://media.gettyimages.com/photos/british-columbia-parliament-buildings-victoria-b-picture-id146583110?s=612x612" alt="Victoria" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1>Victoria, Canada</h1>
                        <h2>320 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://www.vmcdn.ca/f/files/piquenewsmagazine/images/breaking-news/2020-11_news_whistler1-1-521468c73be5b249-1.jpg" alt="Whitsler" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1>Whitsler, Canada</h1>
                        <h2>210 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/b9/99/5c/moraine-lake-photo-taken.jpg?w=500&h=400&s=1" alt="Banff" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1>Banff, Canada</h1>
                        <h2>153 properties</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
