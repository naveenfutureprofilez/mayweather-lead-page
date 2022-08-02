import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import class1 from '../img/class1.png';
import class2 from '../img/class2.png';
import class3 from '../img/class3.png';
import Button from "./common/Button";

export default function ClassesSlider() {

    var settings = {
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const data = [ 
        { 
            title: "Undefeated",
            img: class1,
            action: "classlink"
        }, 
        { 
            title: "STRONG",
            img: class2,
            action: "classlink"
        }, 
        { 
            title: "Champ",
            img: class3,
            action: "classlink"
        }, 
        { 
            title: "Undefeated",
            img: class1,
            action: "classlink"
        } 
    ];

    return (
        <Slider {...settings}>
            {data && data.map((d, i) => {
                return <>
                    <div key={i} className="slideItem" >
                        <p>{d.title}</p>
                        <div className="classItem" >
                            <img src={d.img} className="img-fluid" alt="may weather classes" /> 
                            <a className="btn border-red btn-white" href="#booknow" >Book NOW!</a>
                        </div>
                    </div>
                </>
            })}
        </Slider>
    );
}


