import Button from "./common/Button";
import Title from "./common/Title";
import aboutmay from "../img/aboutmay.png";

export default function AboutMay() {
    return <>
        <div className="aboutmay skew">
            <div className="container pt-5 pb-0 skew-rev" >
                <div className="row align-items-center pb-0 pb-lg-5" >
                    <div className="col-lg-6 pt-lg-0 mt-lg-4 pt-3 pt-lg-0" >
                        <Title
                            titleclass="md text-dark text-center text-lg-start"
                            title={<><strong className="fill" >About </strong> Mayweather <br></br>
                                BOXING <b className="redcolor" >+</b> <strong>FITNESS</strong></>}
                            des={<>
                                <p className="my-3 text-dark  text-center text-lg-start">Customized Workout Plan that makes sense for your goals!</p>

                                <p className="my-3 text-dark  text-center text-lg-start">Simple, easy to follow workouts you can do anywhere!</p>

                                <p className="my-3 text-dark  text-center text-lg-start">A nutrition plan that doesn’t starve you or make you eat things you hate!</p>

                                <p className="my-3 text-dark  text-center text-lg-start">Easy to follow steps to ingrain the right habits in your day-to-day life!</p>

                                <p className="my-3 text-dark  text-center text-lg-start">A team to keep you accountable on a weekly basis!</p>

                                <p className="my-3 text-dark  text-center text-lg-start">A community of people just like you working to see their lives changed!!!</p>
                            </>}
                            desclass='my-3 text-dark  text-center text-lg-start' />
                        <Button text={"Contact Us"} cls="btn btn-primary m-md-0 m-md-0 mt-lg-5 mt-5 d-table" />
                    </div>
                    <div className="col-lg-6 ps-xl-5 pt-4 pt-lg-0" >
                        <img src={aboutmay} className="img-fluid" alt="aboutmay" />
                    </div>
                </div>
            </div>
        </div>
    </>
}