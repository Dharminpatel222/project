import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className="banner_part pt-0 mt-0">
                <div className="container ">
                    <div className="row align-items-center ">
                        <div className="col-lg-6 pt-0 mt-0">
                            <div className="banner_text pt-0 mt-0">
                                <div className="banner_text_iner mt-5 pt-5">
                                    <h5>Expensive but the best</h5>
                                    <h1>Deliciousness jumping into the mouth</h1>
                                    <p className='pstyle'>Together creeping heaven upon third dominion be upon won't darkness rule land
                                        behold it created good saw after she'd Our set living. Signs midst dominion
                                        creepeth morning</p>
                                    <div className="banner_btn">
                                        <div className="banner_btn_iner">
                                            <Link to="/" className="btn_2">Reservation
                                                <img src="img/icon/left_1.svg" alt="" />
                                            </Link>
                                        </div>
                                        <Link to="/" className="popup-youtube video_popup">
                                            <span><img src="img/icon/play.svg" alt="" /></span> Watch our story</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero