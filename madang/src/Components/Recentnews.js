import React from 'react'
import { Link } from 'react-router-dom';

export const Recentnews = () => {
    return (
        <>
            <section className="blog_item_section blog_section section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="section_tittle">
                                <p>Recent News</p>
                                <h2>Latest From Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/blog/blog_1.png" alt="" />
                                </div>
                                <div className="single_blog_text">
                                    <div className="date">
                                        <Link to="/" className="date_item">Apr 06, 2019 </Link>
                                        <Link to="/" className="date_item"> <span>#</span> Food News </Link>
                                    </div>
                                    <h3><Link to="/">Adama kind deep gatherin first over fter his great</Link></h3>
                                    <Link to="/" className="btn_3">Read More <img src="img/icon/left_1.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/blog/blog_2.png" alt="" />
                                </div>
                                <div className="single_blog_text">
                                    <div className="date">
                                        <Link to="/" className="date_item">Apr 06, 2019 </Link>
                                        <Link to="/" className="date_item"> <span>#</span> Food News </Link>
                                    </div>
                                    <h3><Link to="/">Adama kind deep gatherin first over fter his great</Link></h3>
                                    <Link to="/" className="btn_3">Read More <img src="img/icon/left_1.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/blog/blog_3.png" alt="" />
                                </div>
                                <div className="single_blog_text">
                                    <div className="date">
                                        <Link to="/" className="date_item">Apr 06, 2019 </Link>
                                        <Link to="/" className="date_item"> <span>#</span> Food News </Link>
                                    </div>
                                    <h3><Link to="/">Adama kind deep gatherin first over fter his great</Link></h3>
                                    <Link to="/" className="btn_3">Read More <img src="img/icon/left_1.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/blog/blog_1.png" alt="" />
                                </div>
                                <div className="single_blog_text">
                                    <div className="date">
                                        <Link to="/" className="date_item">Apr 06, 2019 </Link>
                                        <Link to="/" className="date_item"> <span>#</span> Food News </Link>
                                    </div>
                                    <h3><Link to="/">Adama kind deep gatherin first over fter his great</Link></h3>
                                    <Link to="/" className="btn_3">Read More <img src="img/icon/left_1.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Recentnews;