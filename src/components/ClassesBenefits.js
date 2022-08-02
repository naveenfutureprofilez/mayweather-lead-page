import Button from "./common/Button";
import background from '../img/classesbg.png';
import ClassesSlider from "./ClassesSlider";
import Title from "./common/Title";

export default function ClassesBenefits() {
    return <>
        <div className="classesWrapv position-relative  skew bgimage" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay"></div>
            <div className="container py-xl-0 skew-rev" >
                <div className="row align-items-center justify-content-center " >
                    <div className="col-lg-9" >
                        <Title
                            titleclass="md text-white text-center text-lg-start"
                            title={<>
                                Does This Sound
                                <strong> Like You?</strong></>}
                            des={<>
                                <p>You’re tired of being TIRED all the time and not having enough energy to keep up with life?</p>

                                <p>You want to workout, but you have don’t have time  to get to the gym?</p>

                                <p>When you finally DO make it to the gym, what do you even do?</p>

                                <p>The small changes you might’ve made don’t seem to be making a  difference?</p>

                                <p>Things that fit a while ago no longer fit, and you’re tired of boing up a size?</p>

                                <p>You’re unhappy with the way you look and feel?</p>

                                <p>You keep trying a new plan just to give up on it in a week or two and go back to bad habits?</p>

                                <p>You need to break the cycle!!!</p>
                            </>}
                            desclass='my-3 text-white text-center text-lg-start'
                        />
                        <Button tag="a" href="#booknow" text={"Book NOW!"} cls="btn btn-primary mt-4 mt-lg-5 m-auto d-table" />
                    </div>
                </div>
            </div>
        </div>
    </>
}