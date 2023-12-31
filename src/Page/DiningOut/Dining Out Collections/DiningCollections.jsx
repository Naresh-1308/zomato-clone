import React from 'react';
import "./DiningCollections.scss";
import Slider from 'react-slick';
import NextArrow from '../../../components/Carousel/NextArrow';
import PreviousArrow from '../../../components/Carousel/PreviousArrow';



const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
};

const DiningCollections = ({list}) => {
    return (
        <div className="collection-wrapper">
            <div className="max-width collection">
                <div className="collection-title">
                    Collections
                </div>
                <div className="collection-subtitle-row">
                    <div className="collection-subtitle-text">
                    Explore a curated list of top restaurants, cafes, pubs and bars in Jaipur based on trends
                    </div>
                    <div className="collection-location">
                        <div>All collection in Jaipur</div>
                        <i className="fi fi-rr-caret-right absolute-center"></i>
                    </div>
                </div>
                <Slider {...settings} >
                    {list.map((item) => (
                        <div>
                            <div className="collection-cover">
                                <img src={item.cover} alt={item.title} className='collection-image' />
                                <div className="gradient-bg"></div>
                                <div className="collection-card-title"> {item.title} </div>
                                <div className="collection-card-subtitle">
                                    <div> {item.places} </div>
                                    <i className="fi fi-rr-caret-right absolute-center"> </i>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default DiningCollections;