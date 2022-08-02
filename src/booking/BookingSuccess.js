import { useEffect, useState } from "react"
import Popup from "../components/common/Popup";
import Loader from "../components/Loader";
import thankyouimage from "../img/thankyouimage.png";

export default function BookingSuccess(props){

    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        setTimeout(()=> { 
            setLoading(false);
        }, 1000);
    }); 

    return <>
        <div class={`thankyouPopup position-relative ${props.classs}`}>
            {loading && <Loader />}
            <div> 
                <img src={thankyouimage} alt="Thankyou" width="140" class="thankyouImage" height="140" />
                <h2>{props.heading}</h2>
                { props.date &&  <>
                  <h3 className="text-success mb-3" >{props.date} by {props.time}</h3> 
                </> }
                <p class="grey-text">Booking Details has been sent to your
                    {props.email ? <><br /> email <strong> : {props.email}</strong> </> : ' email.'}
                </p> 
                <div>
                    <Popup
                        modalClass="videoPopup"
                        btnclass="text-white text-center btn btn-primary mt-2"
                        text="What to expect in your first class" >
                        <iframe src="https://player.vimeo.com/video/668977293?h=3f606f35c0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </Popup> 
                </div>
            </div>
        </div>
    </>
}