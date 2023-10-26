import React from 'react'
import { Link } from 'react-router-dom';

const Populer = () => {
    return (
        <>
            <section className="exclusive_item_part blog_item_section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="section_tittle">
                                <p>Popular Dishes</p>
                                <h2>Our Exclusive Items</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/food_item/food_item_1.png" alt="" />
                                </div>
                                <div className="single_blog_text">
                                    <h3>Indian Burger</h3>
                                    <p>Was brean shed moveth day yielding tree yielding day were female and </p>
                                    <Link to="/" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/food_item/food_item_2.png" alt="" />
                                </div>
                                <div className="single_blog_text">
                                    <h3>Cremy Noodles</h3>
                                    <p>Was brean shed moveth day yielding tree yielding day were female and </p>
                                    <Link to="/" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/food_item/food_item_3.png" alt="" />
                                </div>
                                <div className="single_blog_text">
                                    <h3>Honey Meat</h3>
                                    <p>Was brean shed moveth day yielding tree yielding day were female and </p>
                                    <Link to="/" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/food_item/food_item_1.png" alt="" />
                                </div>
                                <div className="single_blog_text">
                                    <h3>Cremy Noodles</h3>
                                    <p>Was brean shed moveth day yielding tree yielding day were female and </p>
                                    <Link to="/" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Populer;