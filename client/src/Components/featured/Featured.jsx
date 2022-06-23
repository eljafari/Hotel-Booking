import React from 'react';
import UseFetch from '../../Hooks/fetchs';
import "./Featured.css";

export default function Featured() {
    const { data, loading, error } = UseFetch("http://localhost:5000/api/v1/hotels/countByCity?cities=Victoria,Vancouver,Coquitlam,Wistler,Banff");
    // console.log(data.list, 'data');

    return (
        <>
            <div className='featured'>
                {loading ? "Please wait, it's loading..." :
                    (<>
                        <div className="featuredItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Canada_Place_%28213050673%29.jpeg" alt="Vancouver" className="featuredImg" />
                            <div className="featuredTitle">
                                <h1>Victoria</h1>
                                <h2>{data[0]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img src="https://edmontonfetalalcoholnetwork.org/wp-content/uploads/2018/04/2017314-city-resize_then_crop-_frame_bg_color_fff-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.jpg" alt="Toronto" className="featuredImg" />
                            <div className="featuredTitle">
                                <h1 >Vancouver</h1>
                                <h2>{data[1]} properties</h2>
                            </div>
                        </div></>)}
            </div>
            <div className='featured'>
                {loading ? 'Please wait, is Loading...' :
                    (<>
                        <div className="featuredItem">
                            <img src="https://media.gettyimages.com/photos/british-columbia-parliament-buildings-victoria-b-picture-id146583110?s=612x612" alt="Victoria" className="featuredImg" />
                            <div className="featuredTitle">
                                <h1>Coquitlam</h1>
                                <h2>{data[2]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img src="https://s3.amazonaws.com/lmpm-wordpress-media-store-prod/wp-content/uploads/sites/2/2021/09/Whistler-village-Justa-Keskova-1140-x-600.png" alt="Whitsler" className="featuredImg" />
                            <div className="featuredTitle">
                                <h1>Whitsler</h1>
                                <h2>{data[3]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/b9/99/5c/moraine-lake-photo-taken.jpg?w=500&h=400&s=1" alt="Banff" className="featuredImg" />
                            <div className="featuredTitle">
                                <h1>Banff, Canada</h1>
                                <h2>{data[4]} properties</h2>
                            </div>
                        </div></>)}
            </div>
        </>
    )
}
